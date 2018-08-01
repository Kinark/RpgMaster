const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '620209047:AAGkGOoI_RT66mN7IDkNn9E1hsGgNzumsFw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

export default bot
