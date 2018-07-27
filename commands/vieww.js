const Discord = require('discord.js');
const botconfig = require('../botpref.json')
const fs = require('fs')
const warns = require('../lists/warns.json')

module.exports.run = async (client, msg, pars) => {
    if (!msg.member.hasPermission(0x00000002)){console.log(msg.member.nickname+" Tried to use warn");return};
    if (!pars[1]){msg.reply("Please provide an mention for example @user#1234");return}
    var exid = pars[1].split('@')
    var exid1 = exid[1].split('>')
    var taruser = client.users.get(exid1[0])
    var tarid = taruser.id
    const warnfield = new Discord.RichEmbed()
        .setAuthor("Warns of "+tarid)
        .setColor('#ffa500')
        if (!warns[tarid]){msg.reply("This user have no warns");return;};
        if (!warns[tarid].numwarns){msg.reply("This user have no warns");return;};
    for (i = 0; i<warns[tarid].numwarns; i++){
        //console.log(i)
        warnfield.addField("----  __Warn["+i+"]__  ----", '**Reason:** '+warns[tarid][i].reason+'\n'+'**Issued By:** '+warns[tarid][i].issued_by+'\n'+'**Date:** '+warns[tarid][i].date, true)

        

    }
    msg.channel.send(warnfield)

};

module.exports.help = {
    name: "vieww",
    type: "admin",
    desc: "Views a users warnings for example: '!vieww @user#1234'"
}