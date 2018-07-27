const Discord = require('discord.js');
const botconfig = require('../botpref.json')
const fs = require('fs')
const warns = require('../lists/warns.json')
//console.log("test")
module.exports.run = async (client, msg, pars) => {
    //console.log("test")
    if (!msg.member.hasPermission(0x00000002)){console.log(msg.member.nickname+" Tried to use warn");return};
      if (!pars[1]){msg.reply("Please provide an mention for example @user#1234");return}
      var exid = pars[1].split('@')
      var exid1 = exid[1].split('>')
      var taruser = client.users.get(exid1[0])

      //console.log(taruser)
      var text = ''
      for (i = 2; i < pars.length; i++) { 
        //console.log(i)
        text += pars[i] + " ";
    }
      const warnfield = new Discord.RichEmbed()
        .setColor('#FF3333')
        .setAuthor("You recived a Warning")
        //.setTitle('Warning')
        .addField('Reason', text)
        .addField('Issued By', msg.author)
        .setTimestamp()
        .setFooter('NOTE: This is only a warning but if you reach '+botconfig.kick_treshold+ ' Warnings you will recive a kick');
      taruser.send(warnfield)
      var tarid = taruser.id
      var exis = warns[tarid]
      if (exis == undefined){
          //console.log("Hehehhe")
          warns[tarid] = {}
          warns[tarid].numwarns = 0
      }
      num = warns[tarid].numwarns
      warns[tarid][num] = {}
      warns[tarid][num].reason = text
      warns[tarid][num].issued_by = msg.member.displayName
      warns[tarid][num].date = "Null"
      warns[tarid].numwarns += 1
      
      if (warns[tarid].numwarns == 5){
          msg.reply("NOTE: The user have reached the kick tresh hold of: "+botconfig.kick_treshold)
      }
      fs.writeFileSync("./lists/warns.json", JSON.stringify(warns,null,2));
};

module.exports.help = {
    name: "warn",
    type: 'admin',
    desc: "Warn an user for example: '!warn @user#1234 reason'"
}