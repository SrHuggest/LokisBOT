const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Use: >!kick <user> <motivo>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    let pvkMember = kUser
    if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("🛑 Punido 🛑")
    .setColor("#e56b00")
    .addField("👤 Usuário kickado:", `${kUser} ou id ${kUser.id}`)
    .addField("🙆‍ Kikcado por:", `<@${message.author.id}> ou id ${message.author.id}`)
    .addField("📆 Data:", message.createdAt)
    .addField("👀 Motivo:", kReason);

    let pvkembed = new Discord.RichEmbed()
    .setDescription("🛑 Punido 🛑")
    .setColor("GREEN")
    .addField("👤 Usuário Kickado:", `${kUser}`, true)
    .addField("🙆‍ Kickado por:", `<@${message.author.id}>`, true)
    .addField("👀 Motivo:", kReason, true)
    .addField("📆 Data:", message.createdAt, true);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed)
    pvkMember.send(pvkembed)


    return;
  }

  module.exports.help = {
    name:"kick"
  }