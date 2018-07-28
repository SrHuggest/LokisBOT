const Discord = require('discord.js');
exports.run = (client, message, args) => {

    var util = require("util");
    var args = message.content.split(" ").slice(1);
    let code = args.join(' ');
    if (message.author.id != '311114872911822850') return;
    try {
        let ev = eval(code)
        let str = util.inspect(ev, {
            depth: 1
        })
        str = `${str.replace(new RegExp(`${client.token}|${process.env.TOKEN}`, "g"), "nop?")}`;
        if (str.length > 1800) {
            str = str.substr(0, 1800)
            str = str + "..."
        }
        message.delete();
        message.channel.send("", {
            embed: {
                color: 2551400,
                fields: [{
                    name: '**Input**',
                    value: '\`\`\`' + code + '\`\`\`'
                }, {
                    name: '**Output**',
                    value: '\`\`\`' + str + '\`\`\`'
                }],
                footer: {
                    text: ``
                }
            }
        });
    } catch (err) {
        message.react("❌");
        message.channel.send("", {
            embed: {
                color: 2551400,
                fields: [{
                    name: '**Input**',
                    value: '\`\`\`' + code + '\`\`\`'
                }, {
                    name: '**Output**',
                    value: '\`\`\`' + err + '\`\`\`'
                }],
                footer: {
                    text: ``
                }
            }
        });
    }
}

module.exports.help = {
    name:"eval"
  }