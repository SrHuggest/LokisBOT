const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não pode fazer isso.");
  if(!args[0]) return message.channel.send("Não pode fazer isso.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**Eu apaguei ***${args[0]}*** mensagens**.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}