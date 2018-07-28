const Discord = require("discord.js");
const Util = require('discord.js');
const utils = require('bot-utils')
const TOKEN = "token."
const botconfig = require("./botconfig.json");
const xp = require("./xp.json")
const weather = require('weather-js');
const ytdl = require('ytdl-core');
const ytSearch = require( 'yt-search' );
const fs = require("fs");
let cooldown = new Set();
let cdseconds = 5;
let coins = require("./coins.json");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});


bot.on("ready", function () {
    console.log(`📡 Estou conectado a: ${bot.guilds.size} servidores, e ${bot.users.size} usuários.`)
    let games = [`📡 >!help | ` + bot.guilds.size + ` servers e ` + bot.users.size + ` Usuários conectados no total`,
        `🇧🇷 Lokis é um bot totalmente brasileiro.`, `😛 Me adicione em seu servidor >!invite`, `😘💰 Doe para mim em www.lokisbot.weebly.com`, `🤔 Precisando de ajuda? >!ajuda`];
    setInterval(() => {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], { url: "https://twitch.tv/redstoneg4", type: "STREAMING" })

    }, 20000);
});




//Funções do bot/comandos.
bot.on("guildCreate", async guild => {
    console.log(`${guild.name} começou a usar o bolacha kkk`)

});


bot.on('guildMemberAdd', async member => {
    const Canvas = require('Canvas');
    const snekfetch = require('snekfetch');
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
        let fontSize = 70;

        do {
            ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 300);

        return ctx.font;
    };
    const channel = member.guild.channels.find(ch => ch.name === 'portao');
    if (!channel) return;

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./wallpaper.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px Impact';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Seja bem vindo(a) ao servidor', canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

    channel.send(`${member} `, attachment);
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);


    
});

bot.login(TOKEN)
