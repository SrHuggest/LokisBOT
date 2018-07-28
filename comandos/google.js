const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let google = args.slice(0).join('+');
    let embed = new Discord.RichEmbed()
        .addField(`https://www.google.com/search?q=${google}`, `Você pesquisou: **${google}**`)
        .setDescription("**Eu perguntei pro google e...**")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3vWx0eulpmRcyK9vtvbnCqfrTDo958bCTNvgy-HTeCaV-or-MQ")
        .setColor("RED")
    message.channel.send(embed);
}

module.exports.help = {
    name: "google"
  }