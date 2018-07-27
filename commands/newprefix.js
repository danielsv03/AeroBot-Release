const Discord = require('discord.js');
const botconfig = require('../botpref.json')
const fs = require('fs')

module.exports.run = async (client, msg, pars) => {
    if (!msg.member.hasPermission(0x00000002)){msg.reply('Insufficent Premissions!');return};
    botconfig.prefix = pars[1]
    //var te = "ddd"
    botconfig.prefix = pars[1]
      fs.writeFileSync("botpref.json", JSON.stringify(botconfig,null,2));
      msg.reply("Succefully changed prefix to "+botconfig.prefix)
      client.user.setActivity("Prefix: "+botconfig.prefix)
};

module.exports.help = {
    name: "newprefix",
    type: 'admin',
    desc: 'Will change the prefix'
}