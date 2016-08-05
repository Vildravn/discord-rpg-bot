//Load packages
var config = require("config");
var Discord = require("discord.js");

//Load config
var discordToken = config.get("Discord.token");

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log(bot.user.name + " (ID: " + bot.user.id + ") is online");
});

bot.loginWithToken(discordToken);

//Allow the bot to cleanup before terminating the process
process.on("exit", function() {
    exitGracefully();
});

process.on("SIGINT", function() {
    exitGracefully();
});

//Completely log out the bot and exit the process
function exitGracefully() {
    bot.destroy();
    process.exit(-1);
}