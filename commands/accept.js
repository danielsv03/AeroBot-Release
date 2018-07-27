const Discord = require('discord.js');
const botconfig = require('../botpref.json')
const fs = require('fs')

module.exports.run = async (client, msg, pars) => {
    msg.member.addRole('470610757042569221')
};

module.exports.help = {
    name: "accept"
}