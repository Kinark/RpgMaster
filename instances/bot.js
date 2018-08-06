import telegramBotToken from '~/configs/bot'
import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(telegramBotToken, { polling: true });

export default bot;
