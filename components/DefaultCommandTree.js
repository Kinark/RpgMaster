export default class Commander {
   constructor(bot, chatInfo, match, availableCommands) {
      this.bot = bot;
      this.chatInfo = chatInfo;
      this.match = match;
      this.availableCommands = availableCommands;
   }
}
