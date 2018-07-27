const Discord = require('discord.js');
const botconfig = require('../botpref.json')

module.exports.run = async(client, msg, pars) => {
    if (!pars[1]){msg.reply("Please provide an mention for example @user#1234");return}
      var exid = pars[1].split('@')
      var exid1 = exid[1].split('>')
      var taruser = msg.guild.members.get(exid1[0])
      var tarid = taruser.id

      //console.log(taruser)
      var text = ''
      for (i = 2; i < pars.length; i++) { 
        //console.log(i)
        text += pars[i] + " ";
        //console.log(taruser)

    reportfield = new Discord.RichEmbed()
        .setAuthor('Report of '+tarid)
        .setColor('#FFC300')
        .setTimestamp()
        .addField('Sent By', msg.author)
        .addField('Reason', text)
        .addField('Person Reported', '<@'+tarid+'>')
        .addField('Channel', msg.channel)
        client.channels.get(botconfig.report_channel).send(reportfield)

        
        
    }
}

module.exports.help = {
    name: 'report',
    type: 'all',
    desc: 'Report a player for example "!report @user#1234 reason"'

}