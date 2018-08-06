import char from './components/char'
import rpg from './components/rpg'

export default (bot, chatInfo, match) => {

   const chatId = chatInfo.chat.id;
   const command = match[0];
   const args = match.slice(1);

   const availableCommands = { char, rpg }

   if (Object.keys(availableCommands).includes(command)) {
      availableCommands[command](bot, chatInfo, args)
   } else {
      bot.sendMessage(chatId, outputs.unknown(command), { parse_mode: 'HTML' });
   }
};
