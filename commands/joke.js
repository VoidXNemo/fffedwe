var oneLinerJoke = require('one-liner-joke');

module.exports = {
  name: 'joke',
  description: 'Returns a random joke',
  aliases: ['jokes'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Fun',
  async execute(message, args, client) {
    try {
      return message.channel.send({
        embed: {
          title: "Random Jokes",
          description: oneLinerJoke.getRandomJoke()['body'],
          color: "#b19cd9",
          footer: {
            text: "Requested by " + message.author.tag,
            icon_url: message.author.displayAvatarURL()
          },
          timestamp: new Date()
        }
      });
    }
    catch (err) {
      console.log(err);
      return message.reply(`Oh no, an error occurred. Try again later!`);
    }
  }
};