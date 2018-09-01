const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = require("./prefix.json");
const TOKEN = process.env.TOKEN
const fs = require('fs');
const token = process.env.token;

bot.on('ready', () => {

    console.log(`📡 Estou conectado a: ${bot.guilds.size} servidores, e ${bot.users.size} usuários.`)
    let games = [`📡 >!help | ` + bot.guilds.size + ` servers e ` + bot.users.size + ` Usuários conectados no total`,
        `🇧🇷 Lokis é um bot totalmente brasileiro.`, `😛 Me adicione em seu servidor >!invite`, `😘💰 Doe para mim em www.lokisbot.weebly.com`, `🤔 Precisando de ajuda? >!ajuda`];
    setInterval(() => {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], { url: "https://twitch.tv/redstoneg4", type: "STREAMING" })

    }, 20000);
});



bot.on("message", message => {

  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix.prefix)) return;
 //Anti-Comando errado

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.prefix.length);


  let args = message.content.split(" ").slice(1);
  



  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
  }
})
bot.login(TOKEN)