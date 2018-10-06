const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let hMember = message.author
let embed = new Discord.RichEmbed() 
  .setColor("#8e0000")
  .setTitle("ADMINISTRAÇÃO")
  .setThumbnail("https://images.emojiterra.com/google/android-pie/128px/1f6e1.png")
  .setDescription("**>!ban** Banir um membro do server. \n **>!kick** Expulse um membro do server. \n **>!mute** Silencie um player. \n **>!autorole** Seta o cargo desejado a toda vez que uma pessoa entrar ja dar o cargo. \n **>!setprefix** Seta a prefix desejada")

let embed2 = new Discord.RichEmbed()
  .setTitle("DIVERSÃO")
  .setColor("#0651cc")
  .setThumbnail("https://images.emojiterra.com/google/android-pie/128px/1f3b2.png")
  .setDescription("**>!proerd** Fala que a pessoa que você mencionou precisa de proerd. \n **>!shippar** Mostra as chances de um casal. \n **>!abracar** Dê um abraço de alguém. \n **>!emojis** lhe mostra os emojis \n **>!falar** Faça o lokis falar. \n **>!beijar** Dê um beijo em alguém. \n **>!casamento** Peça alguem em casamento. \n **>!carinho** Faça carinho em alguém.")

let embed3 = new Discord.RichEmbed()
  .setColor("#00ff15")
  .setTitle("INFORMAÇÕES")
  .setThumbnail("https://cdn.discordapp.com/emojis/485510033459773450.png")
  .setDescription("** >!serverinfo** Mostra as informações do servidor. \n **>!perfil** Veja as suas informações. \n **>!ping** Veja meu ping. \n **>!invite** Me adicione em seu server. \n **>!botinfo** Veja as informações sobre o bot. \n **>!avatar** Veja a imagem de perfil. \n **>!help** Lhe mostrara os meus comandos.")

let embed4 = new Discord.RichEmbed()
  .setColor("#faff00")
  .setTitle("UTILITARIOS")
  .setThumbnail("https://images.emojiterra.com/google/android-pie/128px/1f943.png")
  .setDescription("**>!tempo** Mostra as informações climaticas de uma cidade. \n **>!report** Reporte alguem pra staff. \n **>!youtube** Pesquise no youtube. \n **>!google** Pesquise no google. \n **>!steam** Pesquise na steam.")

let embed5 = new Discord.RichEmbed()
  .setColor("#c842f4")
  .setTitle("Música")
  .setThumbnail("https://banner2.kisspng.com/20180331/dhw/kisspng-emoji-musical-note-eighth-note-music-notes-5abf238f009d45.9677733615224759190025.jpg")
  .setDescription("**>!play** Toca uma música. \n **>!skip** Pula a faixa tocando para a proxima da lista \n **>!stop** Para a faixa tocando no momento. \n **>!volume** Pode aumentar o volume da musica de 0 a 10. \n **>!np** Mostra o nome da musica tocando no momento \n **>!pause** Pausa a musica tocando. \n **>!resume** Volta a tocar a musica pausada. \n **>!repetir** Repete a musica tocando. \n **>!queue** Gera uma fila das musicas colocadas a tocar.")

  message.channel.send(`${message.author} **Enviei diretamente no seu privado.** :wink:`);
  hMember.send(embed);
  hMember.send(embed2);
  hMember.send(embed3);
  hMember.send(embed4);
  hMember.send(embed5);
}
module.exports.help = {
    name: "help"
}
