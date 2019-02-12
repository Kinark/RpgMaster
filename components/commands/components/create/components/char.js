import bot from '~/instances/bot'
import outputs from '~/components/outputs'
import questionChain from '~/utils/questionChain'

export default (bot, chatInfo, match) => {

   const chatId = chatInfo.chat.id;
   const ownerId = chatInfo.from.id;

   const questions = {
      name: outputs.chooseCharName,
      id: outputs.chooseRpgId
   }

   
   switch (match.length) {
      case 0:
         
         break;
   
      default:
         break;
   }
   questionChain(questions, chatId, ownerId).then(masterAnswer => console.log(masterAnswer)).catch(() => console.log('Fue fue fue fueeeeee'));

   if (match.length == 0) return bot.sendMessage(chatId, outputs.missingRpgName, { parse_mode: 'HTML' });
   // if (match.length > 1) return bot.sendMessage(chatId, outputs.tooMuchRpgName, { parse_mode: 'HTML' });

   // const newRgp = new Rpg({
   //    name: match[0],
   //    owner: chatInfo.from.id,
   //    sheetModel: {
   //       pointsBase: 20,
   //       test: '1d20',
   //       info: [],
   //       status: ['hp', 'mp'],
   //       inventory: true,
   //       picture: false,
   //       attributes: []
   //    }
   // });

   // newRgp.save((err, savedRpg) => {
   //    if (err) return console.error(err);
   //    return bot.sendMessage(chatId, outputs.successNewRpg(savedRpg.name, savedRpg.id), { parse_mode: 'HTML' });
   // })

};
