const Discord = require('discord.js');

module.exports.run = async (client, msg, pars) => {
    msg.channel.send(msg.author+' Is now active')
};

module.exports.help = {
    name: "active",
    type: 'all',
    desc: 'Will reply with you being active'
}