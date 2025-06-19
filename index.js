const TelegramBot = require("node-telegram-bot-api");
const { token, admin } = require("./seting");
const { spamOtp } = require("./lib/data");

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
const menu = `Hello, I am a Telegram bot that functions for OTP spam to WhatsApp.

/spam [nomor]
/owner [contact owner]`
 bot.sendMessage(msg.chat.id, menu);
});

bot.onText(/\/owner/, (msg) => {
 bot.sendMessage(msg.chat.id, "t.me/HanX_6666");
});


bot.onText(/\/spam (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const nomor = match[1];

  if (chatId !== admin) return bot.sendMessage(chatId, "[ X ] Maaf anda tidak memiliki akses bot ini!");
  if (!nomor.startsWith("08")) return bot.sendMessage(chatId, "[ ! ] Nomor harus diawali 08");

  bot.sendMessage(chatId, `proses spam ke ${nomor}...`);
  const hasil = await spamOtp(nomor);
  bot.sendMessage(chatId, `done!`);
});
