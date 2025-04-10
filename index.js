const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

// ✅ Use your actual bot token from BotFather
const TOKEN = '7855348018:AAGEIuGVYKlnFtnkRu0PgdkPrjEDhe_3aQs';
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const CHANNEL_LINK = 'https://t.me/Boomcrashderivvv';

app.post('/', async (req, res) => {
  const message = req.body.message;
  if (!message) return res.sendStatus(200);

  const chatId = message.chat.id;
  const username = message.from.username || 'friend';

  const text = `🚀 Hello @${username}, welcome to the crypto world!\nJoin our trading group: ${CHANNEL_LINK}`;

  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text
    })
  });

  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Bot is running on port ' + PORT);
});
