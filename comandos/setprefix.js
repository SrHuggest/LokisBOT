const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Não pode fazer isso.");
  if(!args[0] || args[0 == "help"]) return message.reply("Use: >!prefix <nova prefix>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix setada")
  .setDescription(`Nova prefix ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "setprefix"
}