let TelegramBot = require("node-telegram-bot-api");
let token = "2054726376:AAEd-jDB3dlAG6w-PrUFVroOMUzhTUmabao";
let bot = new TelegramBot(token, { polling: true });
setInterval(() => {
  bot.onText(
    /(.+)/,
    function (msg, match) {
      // let arr = [];
      // let counter = 0;
      let chatId = -1001190867954;
      // let echo = match[1];
      // arr.push(msg.text);
      bot.sendMessage(chatId, match[1]);
      // counter++;
      console.log(msg.text);
    },
    5000,
  );
});
