const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("Suco de?...")
    .setImage("https://i.ytimg.com/vi/ndi2LgC9aCY/hqdefault.jpg")
    .setFooter("Laranja é claro.")

    message.channel.send(embed)
}
  module.exports.help = {
    name:"sucodemaracuja"
  }