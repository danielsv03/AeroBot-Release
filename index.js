const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require("./botpref.json")
const warns = require("./lists/warns.json")
var fs = require('fs');
client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    //console.log(jsfiles)
    if (jsfiles.length <= 0) console.log("No Files to load")
    console.log(`loading ${jsfiles.length} Files`)
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${i+1}: ${f} Loaded`)
        //console.log((i+1/jsfiles.length)*10+'% Done')
        client.commands.set(props.help.name, props);
        //console.log(client.commands)
    });

});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Prefix: "+botconfig.prefix)
});

client.on('message', msg => {
  var pars = msg.content.split(" ")
  var s = msg.content.split('')
  //console.log(s)
  if (s[0] !== botconfig.prefix) return;
  let cmd = client.commands.get(pars[0].slice(botconfig.prefix.length))
  if (cmd) {
      cmd.run(client, msg, pars)
  }else{
    msg.reply('Command not found!')
  };




  
});

client.on('guildMemberAdd', (member) =>{
    client.channels.get(botconfig.welcome_channel).send('Welcome '+'<@'+member.user.id+"> Please read the rules at #rules and then type "+botconfig.prefix+"accept")
});




client.login(botconfig.token);