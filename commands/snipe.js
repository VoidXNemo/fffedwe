const Discord = require("discord.js")
const config = require("../config.json")
const db = require("quick.db")

module.exports = {
    name: 'snipe',
    description: 'Purges 2 - 100 messages in the channel',
    aliases: ['deletemessage', 'delete'],
    usage: '[number]',
    cooldown: 2,
    args: 1,
    catergory: 'Moderation',
    async execute(message, args, client) {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("There are no deleted messages in this channel!")
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author)
        .setDescription(msg.content)
        .setColor('b19cd9')
        if(msg.image)embed.setImage(msg.image)
        
        message.channel.send(embed)
    }
}