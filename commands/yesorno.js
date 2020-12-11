const answers = [
    'Yes.',
    'No.'
  ]
  
  module.exports = {
    name: 'yesorno',
    description: "The bot will try to use a yes or no to answer your question",
    aliases: ['ball', 'ask'],
    usage: ' [question]',
    cooldown: 2,
    args: -1,
    catergory: 'Fun',
    async execute(message, args, client) {
      try {
        let Message = `The Bot Says: \`${answers[Math.floor(Math.random() * answers.length)]}\``;
        return message.channel.send({
          embed: {
            title: "Yes Or No Machine",
            description: Message,
            color: "#b19cd9",
            footer: {
              text: "Requested by " + message.author.tag,
              icon_url: message.author.displayAvatarURL()
            },
            timestamp: new Date()
          }
        });
      } catch (err) {
        console.log(err);
        return message.reply(`Oh no, an error occurred. Try again later!`);
      }
    }
  };
  