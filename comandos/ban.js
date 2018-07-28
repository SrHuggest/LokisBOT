const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Use: >!ban <user> <motivo>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    let pvbMember = bUser
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("🛑 Punido 🛑")
    .setColor("#bc0000")
    .addField("👤 Usuário Banido:", `${bUser} ou id ${bUser.id}`)
    .addField("🙆‍ Banido por:", `<@${message.author.id}> ou id ${message.author.id}`)
    .addField("📆 Data:", message.createdAt)
    .addField("👀 Motivo:", bReason);

    let pvbembed = new Discord.RichEmbed()
    .setDescription("🛑 Punido 🛑")
    .setColor("GREEN")
    .addField("👤 Usuário Banido:", `${bUser}`, true)
    .addField("🙆‍ Banido por:", `<@${message.author.id}>`, true)
    .addField("👀 Motivo:", bReason, true)
    .addField("📆 Data:", message.createdAt, true);


    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed)
    pvbMember.send(pvbembed)


    return;
  }

  module.exports.help = {
    name:"ban"
  }