const Discord = require('discord.js')

module.exports.run = async (client,message,args) => {
    if (message.mentions.users.first()) {
        userapelido = message.guild.member(message.mentions.users.first()).nickname
      user = message.mentions.users.first().username;
      userfoto = message.mentions.users.first().displayAvatarURL;
    userstatus = message.mentions.users.first().presence.status;
    usertag = message.mentions.users.first().tag;
    usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
    usercriado = message.mentions.users.first().createdAt;
    userid = message.mentions.users.first().id;
  game2 = message.mentions.users.first().presence.game;
  userentrou = message.guild.member(message.mentions.users.first().id).joinedAt;
  usercargo = message.guild.member(message.mentions.users.first().id).roles;
  userbot = message.mentions.users.first().bot;
  
    } else {
      user = message.author.username;
      userfoto = message.author.displayAvatarURL;
      userstatus = message.author.presence.status;
    usertag = message.author.tag;
    usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor;
    usercriado = message.author.createdAt;
    userid = message.author.id;
    game2 = message.author.presence.game;
    userentrou = message.guild.member(message.author.id).joinedAt;
    usercargo = message.guild.member(message.author.id).roles;
    userapelido = message.guild.member(message.author.id).nickname
    userbot = message.author.bot;
    }
    function stats() {
      var status = userstatus
      if  (status == "online") {
      return "Disponível"
    } else if (status == "offline") {
      return ("Indisponível")
      } else if  (status == "dnd") {
      return ("Ocupado")
      } else if (status == "idle") {
      return ("Ausente")
      }
    }
    const cargus = usercargo.map(u => u.name).join(", ")
    function playing(){
      var playings = game2
      if(playings != undefined){
          return playings.name;
      }else{
          return "Não detectado";
      }
  }
    const moment = require('moment');
       moment.locale('pt-BR');
var embed = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`,true)
.addField(":date: Criou a conta em", moment(usercriado).format('ll'), true)
.addField(":date: Entrou aqui em", moment(userentrou).format('ll'), true)
.addField(`:desktop: Jogando:`, `**${playing()}**`, true)
.addField(`:computer: ID:`, userid, true)
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`:briefcase: Cargos`, cargus, true)
.setColor(usercolorole)
.setTimestamp();
message.channel.send({embed : embed})
  };
  module.exports.help = {
    name:"userinfo"
  }  