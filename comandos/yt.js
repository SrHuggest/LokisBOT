const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let youtube = args.slice(0).join('+');
    let embed = new Discord.RichEmbed()
        .addField(`https://www.youtube.com/results?search_query=${youtube}`, `Você pesquisou: **${youtube}**`)
        .setDescription("**Eu perguntei pro youtube e...**")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJybHrz8EksyW96_-uAkMMDh0czw0CR-L6FGOyXwMXelY9z3H")
        .setColor("RED")
    message.channel.send(embed);
}

module.exports.help = {
    name: "youtube"
  }