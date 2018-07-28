const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if (args.join(" ") == "") {
    message.reply("Você precisa mencionar um usuário para este comando! Syntax: >!avatar @user");
    return;
} else {
    let user = message.mentions.users.first(); // Mentioned user
    let image = user.displayAvatarURL; // Get image URL
    let embed = new Discord.RichEmbed()
        .setAuthor(`${user.username}#${user.discriminator}`) // Set author
        .setColor("RANDOM") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
        .setImage(image) // Set image in embed
    message.channel.send(embed); // Send embed
}
}

module.exports.help = {
    name: "avatar"
  }