const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let hMember = message.author
    hMember.send(`<@${hMember.id}> parabéns, você recebeu o cargo`)
}



    module.exports.help = {
        name: "teste3"
      }