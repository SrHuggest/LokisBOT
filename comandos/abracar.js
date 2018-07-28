const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    let abracUser = message.guild.member(message.mentions.users.first());
    if (!abracUser) return message.channel.send("Você usou o comando incorretamente: use >!abracar @user)")

    let abracEmbed = new Discord.RichEmbed()
        .setDescription("Awnnnm que bunitinho")
        .addField("Você ganhou o abraço:", `${abracUser}`)
        .addField("Quem deu o abraço:", `${message.author}`)
        .setImage('https://cdn.discordapp.com/attachments/423651454310416384/465355921623613470/hug-HyllFdmwZ.gif')


    message.channel.sendMessage(abracEmbed);


}
    module.exports.help = {
        name:"abracar"
      }