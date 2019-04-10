const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '851321245:AAH02sFCtTr2VayxbiDnf7ZcBtfXn7lWsus'
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg =>{
    bot.sendMessage(msg.chat.id,'Hello from bot, bot says:' ${msg.from.first_name})
})