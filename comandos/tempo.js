const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {
 
 var weather = require('weather-js');
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
 const Discord2 = require('discord.js');

 const embed2 = new Discord2.RichEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor('BLUE')
.setTitle(':thinking: >!tempo')
.setDescription('Exibe as informações "climáticas" de um específico lugar!\n\n:information_desk_person: **Como usar:** >!tempo cidade\n\n:book: **Exemplo:**\n>!tempo `rondonopolis`')
 .setFooter(`Utilitários • Website: lokisbot.weebly.com`, message.author.displayAvatarURL)
 if(args.length < 1) return message.channel.send({embed : embed2});

if (result === undefined || result.length === 0) return message.channel.send('<:err:449743511391305748> **|** '+message.author+' Não encontrei nenhuma cidade chamada `'+args.join(' ')+'`')


 const moment = require('moment');
 moment.locale('pt-BR'); 
 // Variáveis
 var current = result[0].current; 
 var location = result[0].location;
 var forecast = result[0].forecast[1];
 // Abaixo ele vai enviar uma msg.channel falando o resumo da previsão do tempo para derteminado local! (inclui args)

// Vai constar a váriavel Discord que requer discord.js
 const Discord = require('discord.js');

     // Vai constar a variável "embed" que vai dizer a API do discord que o robô irá fazer um embed rico.
 const embed = new Discord.RichEmbed()
 .setDescription(`[**${current.skytext}**](https://www.msn.com/pt-br/clima)`)
 .setAuthor(`MSN Clima de: ${location.name}`, `https://upload.wikimedia.org/wikipedia/commons/f/fd/MSN_Weather_icon.png`) 
.setColor('#00ffff')

     .addField(':thermometer: Temperatura',`${forecast.high}°C Máxima\n**${current.temperature}°C Atual**\n${forecast.low}°C Minima\n${current.feelslike}°C Sens. térmica`, true)
 .addField(':wind_blowing_face: Velocidade do vento',current.winddisplay, true)
 .addField(`:date: Data e dia`, `${current.date} - ${current.day}`, true)
 .addField(`:cloud: Precipitação`, `${forecast.precip}%`, true)
 .addField(':sweat_drops: Umidade', `${current.humidity}%`, true)
 .addField(':stars: Latitude', `${location.lat}°`, true)
 .addField(':stars: Longitude', `${location.long}°`, true)
.addField('⏰ Fuso horário', `UTC${location.timezone}`, true)
.addField('🛰 Tempo de observação', current.observationtime, true)
 .setTimestamp()

 .setFooter(`${current.observationpoint}`, current.imageUrl)

 message.channel.send({embed});
});
};
module.exports.help = {
    name: "tempo"
}