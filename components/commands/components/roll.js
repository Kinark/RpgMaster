import outputs from '~/components/outputs'
import randomInt from '~/utils/randomInt'

const maxDiceTypes = 5;
const maxDicesPerType = 10;
const maxDiceSides = 100;

export default (bot, chatInfo, args) => {
   const chatId = chatInfo.chat.id;

   if (!/^([0-9]+d[0-9]+\s?)+$/.test(args.join(' '))) {
      bot.sendMessage(chatId, outputs.wrongDices, { parse_mode: 'HTML' })
      return false;
   }

   const dices = args.map(dice => dice.split('d'));

   if (
      dices.length > maxDiceTypes ||
      dices.every(currentDice => currentDice[0] > maxDicesPerType) ||
      dices.every(currentDice => currentDice[1] > maxDiceSides)
   ) {
      bot.sendMessage(chatId, outputs.maxDices, { parse_mode: 'HTML' })
      return false;
   }

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
   const finalMessage = `<b>${outputs.roll} (${args}):</b>\n${sumDetails}\n<b>${result}</b>`;

   bot.sendMessage(chatId, finalMessage, { parse_mode: 'HTML' });
}
