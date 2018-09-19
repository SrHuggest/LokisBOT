

const Discord = require("discord.js");
const fs = require("fs);"

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Vc não pode fazer isso.");
  let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  if (!args[0]) {
     autorole[message.guild.id] = {
         role: 0
     };
    fs.writeFile("./autorole.json", JSON.stringfy(autorole), (err) => {
        if (err) console.log(err);
    });
  }
  if (args[0]) {
      let roles = args.join(" ");
      let role = message.guild.roles.find("name", roles);
      if (!role) return message.reply("Não encontrei esse cargo")
    autorole[message.guild.id] = {
        role: role.id
    };
    fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
         if (err) console.log(err)
    });

    message.reply(`Autorole setado para o cargo <@&${role.id}>`);
  }
}
