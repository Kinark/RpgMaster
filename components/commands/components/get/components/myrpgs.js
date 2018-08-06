import Rpg from '~/models/Rpg'
import outputs from '~/components/outputs'

export default (bot, chatInfo, match) => {

   const chatId = chatInfo.chat.id;
   const masterId = chatInfo.from.id;

   Rpg.find({ owner: masterId }, (err, rpgs) => {
      if (err) return console.error(err);
      if (rpgs.length == 0) return bot.sendMessage(chatId, outputs.noRpgsFound, { parse_mode: 'HTML' });

      let rpgListString = '';
      rpgs.forEach(rpg => {
         rpgListString += `- <b>${rpg.name}</b>\n`
      })

      return bot.sendMessage(chatId, outputs.rpgsList(rpgListString), { parse_mode: 'HTML' });
   })

};
