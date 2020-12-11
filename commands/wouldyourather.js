const fs = require('fs');

let rawdata = fs.readFileSync('./include/assets/json/wouldrather.json');
let Game = JSON.parse(rawdata);

module.exports = {
  name: 'wouldyourather',
  description: "The bot provide a 'would you rather' to talk about",
  aliases: ['wyr'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Fun',
  async execute(message, args, client) {
    try {
      
      let WouldRathers = Game["wouldyourather"];
      let WouldRather = WouldRathers[Math.floor(Math.random() * WouldRathers.length)]

      return message.channel.send({
        embed: {
          title: WouldRather,
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