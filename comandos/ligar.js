const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let numero = args.join(" ").slice(22);
    let guilds2 = ["📞 Você ligou para a policia de ``Butecão Do Skools``", "📞 Você ligou para a ``MOMO``, Muahahahahahah.", "📞 Você ligou para a policia de ``RandomicFlow``", "📞 Você ligou para a policia de ``StartRB [Brasil]``", "Ooo não foi dessa vez tente mais tarde...", "Oooo não foi dessa vez tente mais tarde...", "📞 Você ligou para a policia de ``Center of Bots``"];
    const embed = new Discord.RichEmbed()
        .setDescription(guilds2[Math.floor(guilds2.length * Math.random())])
        .setColor("GREEN")
        .setTitle("``Espere um pouco para ligar novamente``")
    message.channel.send({ embed });

    return message.channel.send(testembed);

}

module.exports.help = {
    name: "ligar"
  }