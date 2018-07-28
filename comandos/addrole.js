const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Desculpe, você não pode fazer isso.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Não foi possível encontrar esse usuário.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifique um cargo!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Não foi possível encontrar esse cargo.");

  if(rMember.roles.has(gRole.id)) return message.reply("Ele já têm esse cargo.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`<@${rMember.id}> parabéns, você recebeu o cargo **${gRole.name}**`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Parabens <@${rMember.id}>, você recebeu o cargo **${gRole.name}**. Tenta-mos falar com ele na Dm, mas parece estar bloqueada.`)
  }
}

module.exports.help = {
  name: "setrole"
}