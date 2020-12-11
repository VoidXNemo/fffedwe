module.exports = {
  name: 'help-economy',
  description: 'Shows List Of Commands',
  cooldown: 2,
  args: -1,
  catergory: 'Fun',
  async execute(message, args, client) {
    try {
      return message.channel.send({
        embed: {
          title: `Commands`,
          description: "ECONOMY *balance *base *beg *camera *coinflip *daily *deposit *fish *gamble *hunt *leaderboard *mine *pay *profile *rob *search *setbio *shop *trivia *typetest *upgrade *wallet *weekly *postmemes *wikihow *withdraw *work",
          color: "#b19cd9",
          footer: {
            text: "Asked By " + message.author.tag,
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
