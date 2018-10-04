const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setAuthor("LokisBOT", bicon)
        .setDescription("Informação do Bot")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("🤖 __Nome do BOT:__", bot.user.username, true)
        .addField("📆 __Criado em:__", "Sab 21 de abril de 2018 14:19:04", true)
        .addField("💻 __Versão:__", "Cmp 1.0.0", true)
        .addField("👑 __Dono:__", bot.users.get("311114872911822850").tag, true)
        .addField("🛰️ __Ping__ :", Math.round(bot.ping), true)
        .addField("👥 __Membros__ :", bot.users.size, true)
        .addField("💬 __Canais__ :", bot.channels.size, true)
        .setColor("#7289DA")
        .addField("Informações | SoS", "Discord para suporte: https://discord.gg/jwBBks5, Site: www.lokisbot.weebly.com", true);

    return message.channel.send(botembed);
}

  module.exports.help = {
    name:"botinfo"
  }
