const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var video;
    var Discord = require('discord.js')
    const ytdl = require("ytdl-core");
    ytSearch = require('yt-search');
    ytSearch(args.join(" "), async function (err, r) {
       if ( err ) throw err
       const videos = r.videos
    video = videos[0]
       console.log(video)
    let musica = "www.youtube.com" + video.url
    let info2 = await ytdl.getInfo(musica)
       let voiceChannel = message.member.voiceChannel

    
       voiceChannel.join()
  
     .then(connection => {
        const stream = ytdl(musica, { filter : 'audioonly' });
        const info = videos[ 0 ]
      
        const dispatcher = connection.playStream(stream)
  let embed = new Discord.RichEmbed()
        .setAuthor(info2.author.name, info2.author.avatar)
        .setThumbnail(info2.thumbnail_url)
        .setColor(message.guild.member(message.author.id).displayHexColor)
        .setDescription(`💽 **|** Escutando agora: [${info.title}](https://www.youtube.com${info.url}) `+'`'+videos[ 0 ].duration.timestamp+'`')
        .setFooter(`🎧 | Tocando em: ${message.member.voiceChannel.name}`, client.user.avatarURL)
        message.channel.send(embed)
     if(!voiceChannel) return voiceChannel.leave()
    
 
           

    });
});
};

module.exports.help = {
    name:"play"
  }
    