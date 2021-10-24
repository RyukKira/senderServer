let TelegramBot = require("node-telegram-bot-api");
let token = "2054726376:AAEd-jDB3dlAG6w-PrUFVroOMUzhTUmabao";
let bot = new TelegramBot(token, { polling: true });
bot.onText(/(.+)/, function (msg, match) {
  let chatId = -1001190867954;
  (function loop() {
    setTimeout(function () {
      let echo = match[1];
      let arr = [];
      let counter = 0;
      arr.push(echo);
      console.log(echo);
      bot.sendMessage(chatId, arr[counter]);
      counter++;
    }, 5000);
  })();
});
