module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
.setTitle("Help Menu!")
.addField("General Commands:", "help")
.setColor("GREEN")
message.channel.send({embed: em})
}

module.exports.help = {
"name": "help"
}
