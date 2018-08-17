'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
	accessToken: '1343756542425480|fthBnwsHCLgG1uk9d5PuAr3eXsY',
	verifyToken: 'https://graph.facebook.com/v2.6/me/',
	appSecret: 'f6e6774eb31bba149a76c9bdd4b1da32'
});

bot.on('message', (payload, chat) => {
	const text = payload.message.text;
	chat.say(`Echo: ${text}`);
});

bot.start();