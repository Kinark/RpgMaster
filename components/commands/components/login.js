import bot from '~/instances/bot'
import Rpg from '~/models/Rpg'
import outputs from '~/components/outputs'

export default (bot, chatInfo, match) => {

   const chatId = chatInfo.chat.id;
   const masterId = chatInfo.from.id;

   if (match.length > 0) {
      return bot.sendMessage(chatId, outputs.rpgChosen('Middlearth'), { parse_mode: 'HTML' });
   }

   Rpg.find({ owner: masterId }, (err, rpgs) => {
      if (err) return console.error(err);
      if (rpgs.length == 0) return bot.sendMessage(chatId, outputs.noRpgsFound, { parse_mode: 'HTML' });

      const rpgButtons = [];
      let row = [];
      rpgs.forEach(rpg => {
         const newButton = { text: rpg.name, callback_data: `login ${rpg.id}` }
         if (row.length == 2) {
            rpgButtons.push(row);
            row = [];
         }
         row.push(newButton)
      })
      if(row.length != 0) {
         rpgButtons.push(row);
         row = [];
      }


      const opts = {
         parse_mode: 'HTML',
         reply_markup: JSON.stringify({
            inline_keyboard: rpgButtons
         })
      };


      return bot.sendMessage(chatId, outputs.chooseRpgForLogin, opts);
   })

};


bot.on('callback_query', function onCallbackQuery(callbackQuery) {
   const action = callbackQuery.data.split(' ');
   const msg = callbackQuery.message;
   const masterId = callbackQuery.from.id
   const rpgId = action[1]

   console.log(masterId)

   if (action[0] !== 'login') return;

   const opts = {
      parse_mode: 'HTML',
      chat_id: msg.chat.id,
      message_id: msg.message_id,
   };

   Rpg.findById(rpgId, (err, rpg) => {
      if (err) return console.error(err);

      let errorMsg = false;
      if (rpg.owner != masterId || !rpg) errorMsg = 'Fuck you, scammer';

      const editText = errorMsg || outputs.rpgChosen(rpg.name);

      bot.editMessageText(editText, opts);
   })

});
