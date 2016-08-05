//Load packages
var config = require('config');
var Discord = require('discord.js');

//Load config
var discordToken = config.get('Discord.token');

var bot = new Discord.Client();

bot.on("message", function(msg) {
    if (msg.content === "ping") {
        bot.reply(msg, "pong");
    }
});

bot.loginWithToken(discordToken);