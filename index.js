const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN
const fs = require('fs');

bot.on('ready', () => {

    console.log(`📡 Estou conectado a: ${bot.guilds.size} servidores, e ${bot.users.size} usuários.`)
      let games = [`📡 >!help | ` + bot.guilds.size + ` servers e ` + bot.users.size + ` Usuários conectados no total`,
        `🇧🇷 Lokis é um bot totalmente brasileiro.`, `😛 Me adicione em seu servidor >!invite`, `😘💰 Doe para mim em www.lokisbot.weebly.com`, `🤔 Precisando de ajuda? >!ajuda`];
    setInterval(() => {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], { url: "https://twitch.tv/redstoneg4", type: "STREAMING" })
    }, 20000);
});

bot.on('guildMemberAdd', async member => {

  const channel = member.guild.channels.find(ch => ch.name === 'lo-entrada');
  if (!channel) return;


  channel.send(`${member}, Estou feliz que tenha entrado :wink:`);
});


bot.on('guildMemberAdd', async member => {

  const channel = member.guild.channels.find(ch => ch.id === '488345499808825367');
  if (!channel) return;


  channel.send(`${member}, Acabou de entrar. Seja bem vindo meu compatriota! Espero que curta nosso servidor ;D :wink:`);
});

bot.on('guildMemberAdd', member => {
  let autorole = JSON.parse(fs.readFileSync("./comandos/autorole.json", "utf8"));
  let config =  ("./autorole.json", "utf8");
  if (!autorole[member.guild.id]) {
       autorole[member.guild.id] = {
           autorole: config.autorole
       };
  }
  var role = autorole[member.guild.id].role;
  if (role === '0') return;
  member.addRole(role);

});

bot.on("message", message => {

      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: ">!"
    };
 }
    
if(message.content.includes('<@477239443237896192>')){
var embedz = new Discord.RichEmbed()
.setAuthor('Oi, perdidinho?')
.setColor("#36393E")
.setThumbnail(message.author.displayAvatarURL)
.setDescription('Eu vi que você está meio perdido em prefixs, minha prefix é ``>!`` \n Para quais quer ajudas a mais entra em contato com a nossa central [Clicando aqui](https://discord.gg/Egf4dTk)')
.setTimestamp()
.setFooter('LokisBOT, Oficial bot.', bot.user.avatarURL)
message.channel.send({embed : embedz})
}
if(message.channel.id == 478924346799161345) { 

  message.react('👍')
  message.react('👎')
  message.react('🤔')
}  

 let prefix = prefixes[message.guild.id].prefixes
    
  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 //Anti-Comando errado

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);
  



  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
  }
})
bot.login(TOKEN)
