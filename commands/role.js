const { Message } = require('discord.js')

module.exports = {
    name: 'role',
    description: "Gives Player Role",
    aliases: ['math', 'eval', 'equation'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Others',
    async execute(message, args, client) {
        if(!msg.member.hasPermission('MANAGE_ROLES')) return msg.reply('You can\'t use that!');
        
        const targetUser = message.mentions.users.first()
        if (!targetUser) {
          message.reply('Please specify someone to give a role to.')
          return
        }
    
        arguments.shift()
    
        const roleName = arguments.join(' ')
        const { guild } = message
    
        const role = guild.roles.cache.find((role) => {
          return role.name === roleName
        })
        if (!role) {
          message.reply(`There is no role with the name "${roleName}"`)
          return
        }
    
        const member = guild.members.cache.get(targetUser.id)
        member.roles.add(role)
    
        message.reply(`that user now has the "${roleName}" role`)
      },
    }