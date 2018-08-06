import mychars from './components/mychars'
import myrpgs from './components/myrpgs'
import sheet from './components/sheet'
import sheetmodel from './components/sheetmodel'
import sheets from './components/sheets'

export default (bot, chatInfo, match) => {

   const chatId = chatInfo.chat.id;
   const command = match[0];
   const args = match.slice(1);

   const availableCommands = { mychars, myrpgs, sheet, sheetmodel, sheets }

   if (Object.keys(availableCommands).includes(command)) {
      availableCommands[command](bot, chatInfo, args)
   } else {
      bot.sendMessage(chatId, outputs.unknown(command));
   }
};
