const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("***Desculpe, mas você não tem permissões válidas! Se você acredita que isso é um erro, entre em contato com um dono da guild.***");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Não achei esse user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("O usuário que você está tentando mutar é igual ou maior que você.");
    let muterole = message.guild.roles.find(`name`, "Mutado");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply(`**Você precisa colocar um tempo.**`);

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> foi mutado por **${ms(ms(mutetime))}.**`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`**<@${tomute.id}> você foi desmutado.**`);
    }, ms(mutetime));

}

exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name:"mute"
  }