const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

        //!report @ned this is the reason

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Você usou o comando incorretamente: use l!report @user (motivo)");
        let rreason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
            .setDescription("__PUNIDO__")
            .setColor("#15f153")
            .addField("USÚARIO REPORTADO:", `${rUser} ou id: ${rUser.id}`)
            .addField("QUEM REPORTOU:", `${message.author} ou id: ${message.author.id}`)
            .addField("DATA:", message.createdAt)
            .addField("MOTIVO:", rreason);

        let reportschannel = message.guild.channels.find(`name`, "reports");
        if (!reportschannel) return message.channel.send("Não foi possível encontrar o canal #reports.");


        message.delete().catch(O_o => { });
        reportschannel.send(reportEmbed);

        return;

    }

  module.exports.help = {
    name:"report"
  }