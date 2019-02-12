import bot from '~/instances/bot'
import outputs from '~/components/outputs'

export default (questions, chatId, authorId) => new Promise((masterResolve, masterReject) => {
   // New blank object to store future answers in the same keys where the questions were
   const masterAnswer = {};
   // Make an array of keys
   const questionKeys = Object.keys(questions);
   // Make an array of questions to ask
   const questionStrings = Object.values(questions);
   // Gets the amount of questions
   const questionsNumber = questionKeys.length;

   // Execute the question based on a counting passed by recursingController (counting) and catches the answer
   const executeQuestion = counting => new Promise((resolve, reject) => {
      // Check if the question is a function or a string
      const questionToAsk = typeof questionStrings[counting] == 'function'
         // If it's a function, sends the previous answer to it
         ? questionStrings[counting](Object.values(masterAnswer)[counting - 1])
         // Otherwise, use the string as it is
         : questionStrings[counting];
      // Sends the question
      bot.sendMessage(chatId, questionToAsk, { parse_mode: 'HTML' }).then(botQuestion => {

         // Stores the question's message ID in case of expiration
         const questionId = botQuestion.message_id;

         // Function to bind to 'message' event. Will wait for a message to be sent
         const replyWaiter = answerMsg => {
            // Checks if the message is from the author of the questiner and returns nothing if it isn't
            if (answerMsg.from.id !== authorId) return;
            // Now the reply was caught, we need to clear bindings and timers
            // Clears the expiration timer
            clearTimeout(replyTimeout);
            // Removes the reply listener from the messages
            bot.removeListener('message', replyWaiter)
            // Stores the answer
            const answer = answerMsg.text;
            // Adds the answer to the masterAnswer in the original Key
            masterAnswer[questionKeys[counting]] = answer;
            // Resolves the current question
            resolve();
         }

         // Bind a replyWaiter function to the 'message' event
         bot.on('message', replyWaiter)

         // Sets a timer for the question to expire
         const replyTimeout = setTimeout(() => {
            // If it expires, remove the listener
            bot.removeListener('message', replyWaiter)
            // Edit the question message
            bot.editMessageText(outputs.timeout, { parse_mode: 'HTML', chat_id: chatId, message_id: questionId });
            // Reject the chain of questions
            return reject();
         }, 30000);

      });
   })

   // Chain recursing controller. It takes the number of questions and excute them one by one
   const recursingController = (counting) => {
      // Returns the master answer if all the questions were already asked
      if (counting === questionsNumber) return masterResolve(masterAnswer);

      // Otherwise, execute the next question with the current counting (executeQuestion function)
      return executeQuestion(counting).then(() => {
         // But binds a '.then()' adding 1 to the counter to follow the chain
         recursingController(counting + 1);
         // Catch a break in the chain
      }).catch(() => masterReject())
   }

   // Starts the chain with the counter on 0 and binds the recursingController
   Promise.resolve(0).then(recursingController)
})
