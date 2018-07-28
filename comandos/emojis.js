const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let emojis;
if (message.guild.emojis.size === 0) emojis = 'Este servidor não tem nenhum emoji ;-;.';
else emojis = `**Emojis de ${message.guild.name}**\n${message.guild.emojis.map(e => e).join(' ')}`;
message.channel.send(emojis);

message.channel.send(`**${err.name}: ${err.message}**`)
}
module.exports.help = {
    name: "emojis"
  }