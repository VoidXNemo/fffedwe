module.exports = {
  name: 'help-fun',
  description: 'Shows List Of Commands',
  cooldown: 2,
  args: -1,
  catergory: 'Fun',
  async execute(message, args, client) {
    try {
      return message.channel.send({
        embed: {
          title: `Commands`,
          description: "FUN *game *8ball *clap *require *dick *iq *gay *joke *fact *math *urban *say *simp *yomama *wouldyourather *yesorno *leet *crypto *proxylist",
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
