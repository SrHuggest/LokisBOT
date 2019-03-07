const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN
const fs = require('fs');

bot.on("ready", () => {
    let iniciar = new Discord.RichEmbed()
        .setAuthor('FlashBOT - Status', `${bot.user.avatarURL}`)
        .setDescription('Iniciado sem nenhum problema.')
        .addField('👱 Usuários',`${bot.users.size}`, true)
        .setFooter('LokisBOT © Todos os Direitos Reservados.')
        .addField('📁 Servidores',`${bot.guilds.size}`, true)
        .setColor('0xbf18d1')

        bot.channels.get('477245275300429825').send(iniciar)
    console.log(`Logado. `);
    let s = [
        { name: `Em atualização 2019.`, type: 'STREAMING', url: 'https://www.twitch.tv/nome' },
        { name: `Na super atualização`, type: 'PLAYING', url: 'https://www.twitch.tv/nome' },
        { name: `Meu criador contar historias`, type: 'LISTENING', url: 'https://www.twitch.tv/nome' },
        { name: `Estou conectado a: ${bot.guilds.size} servidores, e ${bot.users.size} usuários`, type: 'STREAMING', url: 'https://www.twitch.tv/nome' },
        { name: `Minha prefix e F!`, type: 'PLAYING', url: 'https://www.twitch.tv/nome' },
        { name: `Me adicione: https://lokisbot.weebly.com/`, type: 'LISTENING', url: 'https://www.twitch.tv/nome' },
        { name: `LokisBOT - Bot Totalmente Brasileiro`, type: 'WATCHING', url: 'https://www.twitch.tv/nome' }
    ];
    
    function st() {
        let rs = s[Math.floor(Math.random() * s.length)];
        bot.user.setPresence({ game: rs });
    }
  
    st();
    setInterval(() => st(), 5000);  //10000 = 10Ms = 10 segundos
  
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
