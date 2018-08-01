import bot from '../instances/bot'
import randomInt from '../utils/randomInt'

bot.onText(/\/roll (.+)/, (msg, match) => {

   const chatId = msg.chat.id;
   const resp = match[1];

   if (!/^[0-9d ]+$/.test(resp)) {
      bot.sendMessage(chatId, 'Vejo ousadia, mas não dados.', { parse_mode: 'HTML' })
      return false;
   } 

   const dices = resp.split(' ').map(dice => dice.split('d'));

   let sumDetails = '';
   let result = 0;

   dices.forEach(dice => {
      const dicesAmount = dice[0];
      const diceType = dice[1];
      for (let index = 0; index < dicesAmount; index++) {
         const diceResult = randomInt(1, diceType);
         sumDetails += `${diceResult} <code>[D${diceType}]</code> + `;
         result += diceResult;
      }
   })

   sumDetails = sumDetails.substring(0, sumDetails.length - 3);
   const finalMessage = `<b>Rolagem (${resp}):</b>\n${sumDetails}\n<b>${result}</b>`;

   bot.sendMessage(chatId, finalMessage, { parse_mode: 'HTML' });
});
