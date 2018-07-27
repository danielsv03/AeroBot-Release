const Discord = require('discord.js');

module.exports.run = async (client, msg, pars) => {
    msg.reply('Pong!')
};

module.exports.help = {
    name: "ping",
    type: 'all',
    desc: 'Pong!'
}