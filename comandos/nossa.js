const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const Canvas = require('Canvas');
    const snekfetch = require('snekfetch');
    const nossaqbunito = args.slice(0).join(" ");
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
        let fontSize = 70;

        do {
            ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 300);

        return ctx.font;
    };

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./lugarbuni.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px Impact';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${nossaqbunito}`, canvas.width / 2.5, canvas.height / 3.5);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'nossa.jpg');

    message.channel.sendMessage(attachment);
    }
  module.exports.help = {
    name:"nossa"
  }