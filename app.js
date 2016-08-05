//Load packages
var config = require("config");
var Discord = require("discord.js");

var discordToken = config.get("Discord.token");

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log(bot.user.name + " (ID: " + bot.user.id + ") is online");
});

bot.on("message", function(msg) {
    var msgPrefix = config.get("Discord.prefix");

    //If a received message starts with a prefix, treat it as a command
    if (msg.content.startsWith(msgPrefix)) {
        if (isPriviledged(msg.author)) {
            //Below are owner-exclusive commands
        } else {
            //Below are user commands
        }
    }
});

function isPriviledged(user) {
    var ownerId = config.get("Discord.admin.ownerID");

    //Return true if user's ID matches the ownerId set in config
    if (user.id == ownerId) {
        return true;
    }
}

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