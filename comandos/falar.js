const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

const text = args.slice(0).join(" ");
message.channel.sendMessage((text))
}

module.exports.help = {
    name:"falar"
  }