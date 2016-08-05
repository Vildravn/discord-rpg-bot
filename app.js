//Load packages
var config = require("config");
var Discord = require("discord.js");

//Load config
var discordToken = config.get("Discord.token");
var ownerId = config.get("Discord.ownerID");
var msgPrefix = config.get("Discord.prefix");

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log(bot.user.name + " (ID: " + bot.user.id + ") is online");
});

bot.on("message", function(msg) {
    //If a received message starts with a prefix, treat it as a command
    if (msg.content.startsWith(msgPrefix)) {
        if (msg.author.id == ownerId) {
            //Below are owner-exclusive commands
        } else {
            //Below are user commands
        }
    }
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