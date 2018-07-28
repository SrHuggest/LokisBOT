const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let cariUser = message.guild.member(message.mentions.users.first());
if (!cariUser) return message.channel.send("Você usou o comando incorretamente: use >!carinho @user)")

let cariEmbed = new Discord.RichEmbed()
    .setDescription("Awnnnm que bunitinho")
    .addField("Você ganhou carinho:", `${cariUser}`)
    .addField("Quem fez o carinho:", `${message.author}`)
    .setImage('http://3.bp.blogspot.com/-ky4_Adv93RQ/VgE-p2WzrzI/AAAAAAAALrQ/KiLVl4WI-II/s1600/tumblr_nr8v5a4YhM1uo77uno1_500.gif')


message.channel.sendMessage(cariEmbed);

}
module.exports.help = {
    name: "carinho"
  }