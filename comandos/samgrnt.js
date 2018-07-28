const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let memes1 = ["https://images3.memedroid.com/images/UPLOADED282/5afb8f076d1fb.jpeg", "https://images7.memedroid.com/images/UPLOADED240/5afb8fd2e57b6.jpeg", "https://images7.memedroid.com/images/UPLOADED712/5afb884aedd52.jpeg", "https://images7.memedroid.com/images/UPLOADED664/5afb865cade40.jpeg", "https://images3.memedroid.com/images/UPLOADED337/59e936df81c6b.jpeg", "https://images7.memedroid.com/images/UPLOADED684/59e9359459aaf.jpeg", "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/36357140_739214303167637_7093539630699511808_n.jpg?_nc_cat=0&oh=e762af95cb5c6bb22cac2284a1475096&oe=5BE1059A"];
    const embed = new Discord.RichEmbed()
        .setImage(memes1[Math.floor(memes1.length * Math.random())])
        .setColor("RED")
        .setTitle("SamGenerator, o gerador de memes sam");
    message.channel.send({ embed });

    return message.channel.send(testembed);

}

module.exports.help = {
    name: "memes"
  }