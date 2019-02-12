export default (bot, chatInfo, match) => {

   const opts = {
      parse_mode: 'HTML',
      reply_markup: JSON.stringify({
         inline_keyboard: [
            [{ text: 'Sheet Model', callback_data: 'sheetmodel' }],
            [{ text: rpg.name, callback_data: `login ${rpg.id}` }],
         ]
      })
   };

   return bot.sendMessage(chatId, outputs.chooseRpgForLogin, opts);

};
