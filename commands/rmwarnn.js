const Discord = require('discord.js');
const botconfig = require('../botpref.json')
const fs = require('fs')
const warns = require('../lists/warns.json')

module.exports.run = async (client, msg, pars) => {
    if (!msg.member.hasPermission(0x00000004)){msg.reply('Insufficent Premissions!');return};
    if (!pars[1]){msg.reply("Please provide an mention for example @user#1234");return}
    var exid = pars[1].split('@')
    var exid1 = exid[1].split('>')
    var taruser = client.users.get(exid1[0])
    var tarid = taruser.id
    if(!warns[tarid][pars[2]]){msg.reply("That user does not have that warn");return;}
    //console.log(warns[tarid][pars[2]])
    delete warns[tarid][pars[2]]
    //console.log(warns)
    warns[tarid].numwarns = warns[tarid].numwarns-1
    var ofset = 0
    for (i = 0; i<warns[tarid].numwarns+1; i++){
        var check = warns[tarid][i]
        //console.log(i)
        if (check == undefined) {
            var ofset = ofset + 1
            //console.log(warns[tarid][i])

        }else{
            var dif = i-ofset
            
            if (!dif === i) {
                warns[tarid][dif] = warns[tarid][i]
                delete warns[tarid][i]
            };
            
            //console.log(warns[tarid][dif])
        }
    }
    fs.writeFileSync("./lists/warns.json", JSON.stringify(warns,null,2));
};

module.exports.help = {
    name: "rmwarn",
    type: "admin",
    desc: "Removes a warning for example: '!rmwarn @user#1234 warn_number'"
}