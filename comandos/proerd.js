const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    let proerdUser = message.guild.member(message.mentions.users.first());
if(!proerdUser) return message.channel.send(':x: **|** Mencione o usuário para utilizar o comando')
    const proerd = new Discord.RichEmbed()
        .setTitle("PROERDDDD É O PROGRAMA...")
        .setDescription(`${message.author}, falou que você ${proerdUser} precisa fazer proerde`)
        .setImage("http://2.bp.blogspot.com/-AO3-cgv_KyY/UKuDH6kWdbI/AAAAAAAABME/3jvKdI2mEo8/s1600/LEAO.png");

    message.channel.sendMessage(proerd);
    }
  module.exports.help = {
    name:"proerd"
  }
