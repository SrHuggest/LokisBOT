const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let tiroUser = message.guild.member(message.mentions.users.first());
if (!tiroUser) return message.channel.send("Você usou o comando incorretamente: use >!atirar @user)")

let cariEmbed = new Discord.RichEmbed()
    .setDescription("Toooma balaaa")
    .addField("Você ganhou uma bala na cabeça:", `${tiroUser}`)
    .addField("Quem atirou:", `${message.author}`)
    .setImage('http://78.media.tumblr.com/4bb74cde3875443b714c788cc9e55a74/tumblr_mqp3rhj5uO1s9s0bdo1_500.gif')


message.channel.sendMessage(cariEmbed);
}
module.exports.help = {
    name: "atirar"
  }