const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

        let beijUser = message.guild.member(message.mentions.users.first());
        if (!beijUser) return message.channel.send("Você usou o comando incorretamente: use >!beijar @user)")

        let cariEmbed = new Discord.RichEmbed()
            .setDescription("Beijuzin")
            .addField("Você ganhou um beijo 💋:", `${beijUser}`)
            .addField("Quem deu o beijo 😘:", `${message.author}`)
            .setImage('http://media.tumblr.com/tumblr_lupu01Yc541qhvioa.gif')


        message.channel.sendMessage(cariEmbed);

    }
  module.exports.help = {
    name:"beijar"
  }