const Discord = require('discord.js');
const botconfig = require('../botpref.json')
const fs = require('fs')


module.exports.run = async (client, msg, pars) => {
    var text = '';
    var text1 = '';
    
    helpfield = new Discord.RichEmbed()
        .setAuthor("All Commands")
        .setColor('#00FF00')
    fs.readdir('./commands/', (err, files) => {
        if (err) console.log(err);
        let jsfiles = files.filter(f => f.split('.').pop() === 'js');
        //text = ''
        jsfiles.forEach((f,i) => {
            req = require(`./${f}`)
            //console.log(req)
            if (req.help.type == 'all'){
                text += `**${botconfig.prefix}${req.help.name}**\n Description: ${req.help.desc}\n`
                //console.log(text)
            }
            
        return text
        });
        jsfiles.forEach((f,i) => {
            req = require(`./${f}`)
            //console.log(req)
            if (req.help.type == 'admin'){
                text1 += `**${botconfig.prefix}${req.help.name}**\n Description: ${req.help.desc}\n`
                //console.log(text)
            }
        return text1
        });
    //console.log(text)
    helpfield.addField("User Commands", text, true)
    helpfield.addField("Admin Commands", text1, true)
    msg.channel.send(helpfield)
    });
    
};

module.exports.help = {
    name: "help",
    type: "all",
    desc: "The help command"
}