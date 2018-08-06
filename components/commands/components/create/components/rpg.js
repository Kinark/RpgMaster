import Rpg from '~/models/Rpg';
import outputs from '~/components/outputs'

export default (bot, chatInfo, match) => {

   const chatId = chatInfo.chat.id;

   if (match.length == 0) return bot.sendMessage(chatId, outputs.missingRpgName, { parse_mode: 'HTML' });
   if (match.length > 1) return bot.sendMessage(chatId, outputs.tooMuchRpgName, { parse_mode: 'HTML' });

   const newRgp = new Rpg({
      name: match[0],
      owner: chatInfo.from.id,
      sheetModel: {
         pointsBase: 20,
         test: '1d20',
         info: [],
         status: ['hp', 'mp'],
         inventory: true,
         picture: false,
         attributes: []
      }
   });

   newRgp.save((err, savedRpg) => {
      if (err) return console.error(err);
      return bot.sendMessage(chatId, outputs.successNewRpg(savedRpg.name, savedRpg.id), { parse_mode: 'HTML' });
   })
};
