import bot from '~/instances/bot'

import outputs from '~/components/outputs'

import addinv from './components/addinv'
import delinv from './components/delinv'
import get from './components/get'
import max from './components/max'
import create from './components/create'
import set from './components/set'
import lock from './components/lock'
import login from './components/login'
import roll from './components/roll'
import unlock from './components/unlock'


bot.onText(/^\/([^\s].+)$/, (chatInfo, match) => {

   // console.log(chatInfo);
   
   const wholeMessage = match[1].split(' ')

   const chatId = chatInfo.chat.id;
   const command = wholeMessage[0];
   const args = wholeMessage.slice(1);

   const availableCommands = { addinv, delinv, get, max, create, set, lock, login, roll, unlock }

   if(Object.keys(availableCommands).includes(command)) {
      availableCommands[command](bot, chatInfo, args)
   } else {
      bot.sendMessage(chatId, outputs.unknown(command));
   }
});
