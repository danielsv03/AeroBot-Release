const Discord = require('discord.js');
const botconfig = require('../botpref.json')
const fs = require('fs')

module.exports.run = async (client, msg, pars) => {
    msg.delete()
    msg.channel.send(msg.author+' Is now going unactive the reason and length of abscence should be stated below')
    
};

module.exports.help = {
    name: "inactive",
    type: 'all',
    desc: 'Will reply with you being inactive'
}