const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    let psc2 = ["83% [█████████..] Só falta um deles aceitar.", "83% [█████████..] Só falta um deles aceitar.", "67% [███████....] Achei legal esse casal hein.", "67% [███████....] Achei legal esse casal hein.", "42% [█████......] Falta só um deles aceitar.", "42% [█████......] Falta só um deles aceitar.", "100% [███████████] Ficaria surpreso se os dois já não namoram.", "50% [██████.....] Hummm sei não hein.", "50% [██████.....] Hummm sei não hein."]
    let shipUser = message.mentions.users.array()[0];
    let shipUser2 = message.mentions.users.array()[1];
    if (!shipUser) return message.channel.send("Você usou o comando incorretamente: use l!shippar (@user1) (@user2)")

    let shipEmbed = new Discord.RichEmbed()
        .setDescription("Shipando... ")
        .addField("Ummm será que temos um novo casal aqui:", `${shipUser} 👨🏻‍💖👩 ${shipUser2}`)
        .addField("Comando requisitado por:", `${message.author}`)
        .setColor("RED")
        .setImage("https://cdn.discordapp.com/attachments/467721860910415883/468806111684722698/Capturar.PNG")
        .addField("**Porcentagem de dar certo:**", "👇")
        .setFooter(psc2[Math.floor(psc2.length * Math.random())])


    message.channel.sendMessage(shipEmbed);

    }
  module.exports.help = {
    name:"shippar"
  }