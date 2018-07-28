const Discord = require('discord.js')

module.exports.run = async (client,message,args) => {
let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
let coins = require("../coins.json");
if(!coins[usuario.id]){
coins[usuario.id] = {
  coins: 0
};
}
let sobre = require("../sobre.json");
if(!sobre[usuario.id]){
        sobre[usuario.id] = {
        sobre: "Uma Pessoa Legal"
    };
}
let sobrever = sobre[usuario.id].sobre;
let uCoins = coins[usuario.id].coins;
let xp = require("../xp.json");
let reps = require("../reps.json");
if(!xp[usuario.id]){
    xp[usuario.id] = {
      xp: 0,
      level: 1
   };
 }
   let curxp = xp[usuario.id].xp;
   let curlvl = xp[usuario.id].level;
if(!reps[usuario.id]) reps[usuario.id] = {
reps: 0
}; 
let verreps = reps[usuario.id].reps;
var desenvolvedores = ["411361942071148545"]
let back = require("../back.json");
 if(!back[usuario.id]) back[usuario.id] = {
    back: "https://i.imgur.com/RcBGhPW.png"
  };
const Jimp = require('jimp')
let verback = back[usuario.id].back;
Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (letra) {
    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (letra2) {
        Jimp.read("https://i.imgur.com/RcBGhPW.png", function (erre, img) {
            Jimp.read(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0TQRFtuK-TsS3uu9YdDS3-g5AFMxcR47wf2WNA87_WJej0Qa9g`).then(function (background) {
                Jimp.read(`${usuario.avatarURL}`).then(function (avatar) {
                    Jimp.read(`https://emojipedia-us.s3.amazonaws.com/thumbs/120/microsoft/106/police-officer_1f46e.png`).then(function (staff) {
                        Jimp.read("https://i.imgur.com/csMF76L.png").then(function (perfil) {
                            Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function (mascara) {
                                avatar.resize(130, 130);
                                mascara.resize(130, 130);
                                staff.resize(40, 40);
                                avatar.mask(mascara, 0, 0);
                                background.resize(450, 290);
                                img.composite(background, 1, 10);
                                img.composite(perfil, 0, 0);
                                img.composite(avatar, 19, 56);
                                if(desenvolvedores.includes(usuario.id)) {
                                    img.composite(staff, 110, 145)
                                }
                                img.print(letra2, 160, 110, `${usuario.tag}`);
                                img.print(letra, 257, 139, `${curlvl}`);
                                img.print(letra, 257, 230, `${Number(`${uCoins}`).toLocaleString()}`);
                                img.print(letra, 257, 215, `${Number(`${curxp}`).toLocaleString()}`);
                                img.print(letra, 390, 139, `${Number(`${verreps}`).toLocaleString()}`);

                                img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                    message.channel.send(``, new Discord.Attachment(buffer, 'Profile.png'));
                                    message.channel.stopTyping();

                                });
                            });
                        })
                    });
                });
            });
        });
    });
});
}
module.exports.help = {
    name:"perfil"
  }  