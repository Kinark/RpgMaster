import sheetmodel from './components/sheetmodel'

export default (bot, chatInfo, match) => {

   const chatId = chatInfo.chat.id;
   const command = match[0];
   const args = match.slice(1);

   const availableCommands = { sheetmodel }

   if (Object.keys(availableCommands).includes(command)) {
      availableCommands[command](bot, chatInfo, args)
   } else {
      bot.sendMessage(chatId, outputs.unknown(command));
   }
};
