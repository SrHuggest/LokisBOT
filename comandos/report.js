const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

        //!report @ned this is the reason

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Você usou o comando incorretamente: use >!report @user (motivo)");
        
        let rreason = args.join(" ").slice(22);
if(!rreason) message.reply("Motivo")
        let reportEmbed = new Discord.RichEmbed()
            .setAuthor("Report - Lokis", message.author.displayAvatarURL)
            .setColor("RED")
            .addField("Reportado:", `${rUser} | ${rUser.id}`)
            .addField("Quem reportou:", `${message.author} | ${message.author.id}`)
            .addField("Data:", message.createdAt)
            .addField("Motivo:", rreason);
        let reportschannel = message.guild.channels.find(`name`, "lo-punicoes");
        if (!reportschannel) return message.channel.send("Não foi possível encontrar o canal #reports.");


        message.delete().catch(O_o => { });
        reportschannel.send(reportEmbed);

        return;

    }

  module.exports.help = {
    name:"report"
  }
