const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let steam = args.slice(0).join('+');
    let embed = new Discord.RichEmbed()
        .addField(`https://store.steampowered.com/search/?term=${steam}`, `Você pesquisou: **${steam}**`)
        .setDescription("**Eu perguntei na Steam e...**")
        .setThumbnail("https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016")
        .setColor("#060334")
    message.channel.send(embed);
}

module.exports.help = {
    name: "steam"
  }