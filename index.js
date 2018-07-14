const Discord = require("discord.js");
const TOKEN = "NDM3MzAxMjU5NDE0OTI5NDA4.Dg8crw.CIvLyO7gv4hqYtmQF7K9rbz1MfU"
const botconfig = require("./botconfig.json");
const fs = require("fs");
const xp = require("./xp.json")
const weather = require('weather-js');
const YTDL = require('ytdl-core')



var bot = new Discord.Client();
var client = new Discord.Client();
var servers = {};


bot.on("ready",function() {
    console.log("Pronto...")
    bot.user.setGame(`para ${bot.guilds.size.toLocaleString()} servidores | e usuarios ${bot.users.size} | b!ajuda`, 'http://twitch.com/redstoneg4');


});

function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {
      filter: "audioonly"
  }));

  server.queue.shift();

  server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect();
  });

}

//Funções do bot/comandos.
    bot.on("guildCreate", async guild => {
      const invite = await guild.channels.first().createInvite({
        maxAge: 0
      });
      console.log(`Adicionaram seu bot em: ${guild.name} invite: https://discord.gg/${invite.code}`)
    });
       
    

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Você usou o comando incorretamente: use b!kick @user (motivo)");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Não pode fazer isso!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" Essa pessoa não pode ser kickada!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField(":raised_back_of_hand: Usuário kickado", `${kUser} ou id ${kUser.id}`)
    .addField(":dnd: Kikcado por", `<@${message.author.id}> ou id ${message.author.id}`)
    .addField(":idle: Kickado", message.channel)
    .addField(":idle: Data", message.createdAt)
    .addField(":discord: Motivo", kReason);

    let kickChannel = message.guild.channels.find(`name`, "reports");
    if(!kickChannel) return message.channel.send("Não foi possível encontrar o canal #reports.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Você usou o comando incorretamente: use b!ban @user (motivo)");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Não pode fazer isso!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Essa pessoa não pode ser kickada!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Usuário Banido", `${bUser} ou id ${bUser.id}`)
    .addField("Banido por", `<@${message.author.id}> ou id ${message.author.id}`)
    .addField("Banido em", message.channel)
    .addField("Data", message.createdAt)
    .addField("Motivo", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "reports");
    if(!incidentchannel) return message.channel.send("Não foi possível encontrar o canal #reports.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }

  if (message.content.startsWith(prefix + "eval")) {
    var util = require("util");
    let args = message.content.split(" ").slice(1);   
    let code = args.join(' ');
      if (message.author.id != '311114872911822850') return;
        try {
      let ev = eval(code)
                    let str = util.inspect(ev, {
                        depth: 1
                    })
                     str = `${str.replace(new RegExp(`${bot.TOKEN}|${process.env.TOKEN}`, "g"), "nop?")}`;
                    if(str.length > 1800) {
                        str = str.substr(0, 1800)
                        str = str + "..."
                    }
                    message.delete(); 
        message.channel.send("", { embed: { 
          color: 2551400,      
      fields: [{        
        name: '**Entrada**',     
          value: '\`\`\`' + code + '\`\`\`'         
    },{     
          name: '**Saída**', 
              value: '\`\`\`' + str + '\`\`\`'  
            }], 
          footer: {     
        text: ``    }     }});} catch (err) {   message.react("❌");
    message.channel.send("", { embed: { 
          color: 2551400,      
      fields: [{        
        name: '**Entrada**',     
          value: '\`\`\`' + code + '\`\`\`'         
    },{     
          name: '**Saída**', 
              value: '\`\`\`' + err + '\`\`\`'  
            }], 
          footer: {     
        text: ``    }     }});    } }

  if(cmd === `${prefix}report`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Você usou o comando incorretamente: use b!report @user (motivo)");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Usuário denunciado", `${rUser} ou id: ${rUser.id}`)
    .addField("Reportado por", `${message.author} ou id: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt)
    .addField("Motivo", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Não foi possível encontrar o canal #reports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  
}

  if(cmd === `${prefix}reportbug`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Você usou o comando incorretamente: use b!report @user (motivo)");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Usuário denunciado", `${rUser} ou id: ${rUser.id}`)
    .addField("Reportado por", `${message.author} ou id: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt)
    .addField("Motivo", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Não foi possível encontrar o canal #reports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }


  if(cmd === `${prefix}serverinfo`){

    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let dia = message.guild.createdAt.getDate()
    let mês = 1 + message.guild.createdAt.getMonth()
    let ano = message.guild.createdAt.getFullYear()
     let sicon = message.guild.iconURL;
     let emojion = "https://cdn.discordapp.com/emojis/464117070594965506.png?v=1"
     let serverembed = new Discord.RichEmbed()
     .setAuthor(message.guild.name, sicon)
     .setFooter(`📆 Servidor criado • Dia ${dia}. Mês ${mês}. Ano ${ano}.`)
     .setColor("#7289DA")
     .setThumbnail(sicon)
     .addField("💻 ID", message.guild.id, true)
     .addField("✍🏽 Nome", message.guild.name, true)
     .addField("👑 Dono", message.guild.owner.user.tag, true)
     .addField("🌎 Região", message.guild.region, true)
     .addField("💬 Canais", message.guild.channels.size, true)
     .addField("👥 Membros", message.guild.memberCount, true)
     .addField("🕺 Pessoas", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
     .addField("🤖 Bots", message.guild.members.filter(m => m.user.bot).size, true)
     .addField(`Online`, online.size, true)
     .addField("Roles", message.guild.roles.size, true);
     message.channel.send(serverembed);
  
  }
  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("BiscoitinhoBOT", bicon)
    .setDescription("Informação do Bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("🤖 __Nome do BOT:__", bot.user.username, true)
    .addField("📆 __Criado em:__", "Sab 21 de abril de 2018 14:19:04", true)
    .addField("💻 __Versão:__", "Beta 1.0.0", true)
    .addField("👑 __Dono:__", "Sr.Huggest#5202", true)
    .addField("🛰️ __Ping__ :", Math.round(bot.ping), true)
    .addField("👥 __Membros__ :", bot.users.size, true)
    .addField("💬 __Canais__ :", bot.channels.size , true)
    .setColor("#7289DA")
    .addField("Informações", "Discord para suporte: https://discord.gg/jwBBks5, Site: www.biscoitinhobot.weebly.com", true);

    return message.channel.send(botembed);
  }

  if(message.content.startsWith(prefix + "google")) {
    let google = args.slice(0).join('');
    let embed = new Discord.RichEmbed()
        .addField(`https://www.google.com/search?q=${google}`, `Você pesquisou: **${google}**`)
        .setDescription("**Eu perguntei pro google e...**")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3vWx0eulpmRcyK9vtvbnCqfrTDo958bCTNvgy-HTeCaV-or-MQ")
        .setColor("#F5FBEF")
    message.channel.send(embed);
    }
    


if(message.content.startsWith(prefix + "youtube")) {
    let youtube = args.slice(0).join('');
    let embed = new Discord.RichEmbed()
        .addField(`https://www.youtube.com/results?search_query=${youtube}`, `Você pesquisou: **${youtube}**`)
        .setDescription("**Eu perguntei pro youtube e...**")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJybHrz8EksyW96_-uAkMMDh0czw0CR-L6FGOyXwMXelY9z3H")
        .setColor("RED")
	message.channel.send(embed);
}


  
  if(cmd === `${prefix}samgenerator`){

    let memes1 = ["https://images3.memedroid.com/images/UPLOADED282/5afb8f076d1fb.jpeg", "https://images7.memedroid.com/images/UPLOADED240/5afb8fd2e57b6.jpeg", "https://images7.memedroid.com/images/UPLOADED712/5afb884aedd52.jpeg", "https://images7.memedroid.com/images/UPLOADED664/5afb865cade40.jpeg", "https://images3.memedroid.com/images/UPLOADED337/59e936df81c6b.jpeg", "https://images7.memedroid.com/images/UPLOADED684/59e9359459aaf.jpeg", "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/36357140_739214303167637_7093539630699511808_n.jpg?_nc_cat=0&oh=e762af95cb5c6bb22cac2284a1475096&oe=5BE1059A"];
    const embed = new Discord.RichEmbed()
        .setImage(memes1[Math.floor(memes1.length * Math.random())])
        .setColor("RED")
        .setTitle("SamGenerator, o gerador de memes sam");
    message.channel.send({embed});

    return message.channel.send(testembed);

  }

  if(cmd === `${prefix}ligar`){


    //ligacao

    let numero = args.join(" ").slice(22);
    let guilds2 = ["📞 Você ligou para a policia de ``🎮AnimeCommunity™🎮``", "📞 Você ligou para a policia de ``Butecão Do Skools``", "📞 Você ligou para a policia de ``StartMc``", "📞 Você ligou para a policia de ``StartRB [Brasil]``", "Ooo não foi dessa vez tente mais tarde...", "Oooo não foi dessa vez tente mais tarde...", "📞 Você ligou para a policia de ``Center of Bots``"];
    const embed = new Discord.RichEmbed()
        .setDescription(guilds2[Math.floor(guilds2.length * Math.random())])
        .setColor("GREEN")
        .setTitle("``Espere um pouco para ligar novamente``")
    message.channel.send({embed});

    return message.channel.send(testembed);

  }


  if(cmd === `${prefix}carinho`){

    //carinho

    let cariUser = message.guild.member(message.mentions.users.first());
    if(!cariUser) return message.channel.send("Você usou o comando incorretamente: use b!carinho @user)")

    let cariEmbed = new Discord.RichEmbed()
    .setDescription("Awnnnm que bunitinho")
    .addField("Você ganhou carinho:", `${cariUser}`)
    .addField("Quem fez o carinho:", `${message.author}`)
    .setImage('http://3.bp.blogspot.com/-ky4_Adv93RQ/VgE-p2WzrzI/AAAAAAAALrQ/KiLVl4WI-II/s1600/tumblr_nr8v5a4YhM1uo77uno1_500.gif')


    message.channel.sendMessage(cariEmbed);

    return;
  }

  if(cmd === `${prefix}atirar`){

    //tiro

    let tiroUser = message.guild.member(message.mentions.users.first());
    if(!tiroUser) return message.channel.send("Você usou o comando incorretamente: use b!atirar @user)")

    let cariEmbed = new Discord.RichEmbed()
    .setDescription("Toooma balaaa")
    .addField("Você ganhou uma bala na cabeça:", `${tiroUser}`)
    .addField("Quem atirou:", `${message.author}`)
    .setImage('http://78.media.tumblr.com/4bb74cde3875443b714c788cc9e55a74/tumblr_mqp3rhj5uO1s9s0bdo1_500.gif')


    message.channel.sendMessage(cariEmbed);

    return;
  }
  if(cmd === `${prefix}emojis`){

  let emojis;
  if (message.guild.emojis.size === 0) emojis = 'Este servidor não tem nenhum emoji ;-;.';
  else emojis = `**Emojis de ${message.guild.name}**\n${message.guild.emojis.map(e => e).join(' ')}`;
  message.channel.send(emojis);

  message.channel.send(`**${err.name}: ${err.message}**`)
}


  if(cmd === `${prefix}abracar`){

    //carinho

    let abracUser = message.guild.member(message.mentions.users.first());
    if(!abracUser) return message.channel.send("Você usou o comando incorretamente: use b!carinho @user)")

    let abracEmbed = new Discord.RichEmbed()
    .setDescription("Awnnnm que bunitinho")
    .addField("Você ganhou o abraço:", `${abracUser}`)
    .addField("Quem deu o abraço:", `${message.author}`)
    .setImage('https://cdn.discordapp.com/attachments/423651454310416384/465355921623613470/hug-HyllFdmwZ.gif')


    message.channel.sendMessage(abracEmbed);

    return;
  }


  if(cmd === `${prefix}beijar`){

    //atirar

    let beijUser = message.guild.member(message.mentions.users.first());
    if(!beijUser) return message.channel.send("Você usou o comando incorretamente: use b!beijar @user)")

    let cariEmbed = new Discord.RichEmbed()
    .setDescription("Beijuzin")
    .addField("Você ganhou um beijo 💋:", `${beijUser}`)
    .addField("Quem deu o beijo 😘:", `${message.author}`)
    .setImage('http://media.tumblr.com/tumblr_lupu01Yc541qhvioa.gif')


    message.channel.sendMessage(cariEmbed);

    return;
  }

  if (msg.content == prefix + 'floof') {
    require('request').get('https://api.tfdfurry.com/floof.json', (err, res, body) => {
        msg.channel.send(new Discord.RichEmbed().setImage('https://' + JSON.parse(body).file))
    });
  }

  if (msg.content == prefix + 'furry') {
    var furrymbed = new Discord.RichEmbed()
    .setFooter(`Comando enviado por: `)
    .setTitle("Furry")
    .setImage("https://api.tfdfurry.com/random");

    message.channel.sendMessage(furrymbed);

    return;
  }

  if(cmd === `${prefix}aasddsad`){
    return message.channel.send(bd);

    if(cmd === `${prefix}qui`){

  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Por favor coloque um local!**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Tempo para ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor('0x00AE86')
          .addField('Fuso horário',`UTC${location.timezone}`, true)
          .addField('Tipo de Grau',location.degreetype, true)
          .addField('Temperatura',`${current.temperature} Graus`, true)
          .addField('Parece', `${current.feelslike} Graus`, true)
          .addField('Ventos',current.winddisplay, true)
          .addField('Umidade', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
  


  }
});


    

bot.on('guildMemberAdd', (member) => {
    var mensagem = new Discord.RichEmbed()
        .setTitle(`👉 Sejá bem vindo(a) ao Discord`)
        .addField("Quem entrou", member)
        .setColor('0x00AE86')
        .setTimestamp();
    let canal = '462449134922629121';
    bot.channels.get(canal).send(mensagem);
    });



bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content.startsWith(botconfig)) return;

    var args = message.content.substring(botconfig.length).split();

    switch (args[0]) {

        case "b!help":
            var embed = new Discord.RichEmbed()
                .setTitle("Comandos")
                .setColor('#ca0e0e')
                .setFooter("Para ver todos nossos comandos acesse www.biscoitinhobot.weebly.com")
            message.channel.sendMessage(embed);
            break;
        case "b!ajuda":
            var embed = new Discord.RichEmbed()
                .setTitle("Comandos")
                .setColor('#ca0e0e')
                .setFooter("Para ver todos nossos comandos acesse www.biscoitinhobot.weebly.com")
            message.channel.sendMessage(embed);
            break;
        case "b!ping":
            let bicon = bot.user.displayAvatarURL;
            var embed = new Discord.RichEmbed()
                .addField("PING:", bot.ping + 000)
                .addField("SHARD:", bot.shard.id + 1)
                .setColor("GREEN")
                .setDescription("***O PING MOSTRADO AQUI É O DO BOT***")
                .setThumbnail(bicon)
            message.channel.sendMessage(embed);
            break;
        case "b!tempo":
            message.channel.sendMessage(`${message.author} Comando em desenvolvimento 🔨`)
            break;
        



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});




            
 
 }
});

bot.login(TOKEN)