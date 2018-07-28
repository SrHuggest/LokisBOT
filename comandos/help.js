const Discord = require('discord.js');


let pages = [':gear: __**COMANDOS DE ADMINISTRAÇÃO**__ :gear: \n \n **>!ban** Banir um membro do server. \n **>!kick** Expulse um membro do server. \n **>!mute** Silencie um player.', ':cat: __**COMANDOS DE DIVERSÃO**__ :cat: \n \n **>!shippar** Mostra as chances de um casal. \n  \n **>!abracar** Dê um abraço de alguém. \n **>!emojis** lhe mostra os emojis \n **>!falar** Faça o lokis falar. \n **>!beijar** Dê um beijo em alguém. \n **>!casamento** Peça alguem em casamento. \n **>!carinho** Faça carinho em alguém.', '<a:engrenagem:465311698438324236> __**COMANDOS DE INFORMAÇÃO**__ <a:engrenagem:465311698438324236> \n \n ** >!serverinfo** Mostra as informações do servidor. \n **>!perfil** Veja as suas informações. \n **>!ping** Veja meu ping. \n **>!invite** Me adicione em seu server. \n **>!botinfo** Veja as informações sobre o bot. \n **>!avatar** Veja a imagem de perfil. \n **>!help** Lhe mostrara os meus comandos.', '<:chapeuzinho:462784414162878464> __**COMANDOS UTEIS**__ <:chapeuzinho:462784414162878464> \n \n **>!tempo** Mostra as informações climaticas de uma cidade. \n **>!report** Reporte alguem pra staff. \n **>!youtube** Pesquise no youtube. \n **>!google** Pesquise no google. \n **>!steam** Pesquise na steam.']; 
let page = 1; 
module.exports.run = async (bot, message, args) => {
let hMember = message.author
let embed = new Discord.RichEmbed() 
  .setColor("RED")
  .setFooter(`Pagina ${page} de ${pages.length}`) 
  .setDescription(pages[page-1])

  message.channel.send(`${message.author} **Enviei diretamente no seu privado.** :wink:`)
  hMember.send(embed).then(msg => { 
 
  msg.react('⏪').then( r => { 
    msg.react('⏩') 


   
    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
    const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 

    const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
    const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
   
    
    backwards.on('collect', r => { 
      if (page === 1) return; 
      page--; 
      embed.setDescription(pages[page-1]) 
      embed.setFooter(`Page ${page} of ${pages.length}`); 
      msg.edit(embed) 
    })

    forwards.on('collect', r => { 
      if (page === pages.length) return; 
      page++; 
      embed.setDescription(pages[page-1]); 
      embed.setFooter(`Pagina ${page} de ${pages.length}`); 
      msg.edit(embed) 
    })
 
  })
})
}
module.exports.help = {
    name: "help"
}