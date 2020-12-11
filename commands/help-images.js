module.exports = {
  name: 'help-images',
  description: 'Shows List Of Commands',
  cooldown: 2,
  args: -1,
  catergory: 'Fun',
  async execute(message, args, client) {
    try {
      return message.channel.send({
        embed: {
          title: `Commands`,
          description: "IMAGES *3000years *aceattorney *alert *approved *bartchalkboard *beautiful *bobross *brazzers *caution *certificate *challenger *changemymind *chiidea *communist *deepfry *dislike *distort *factbook *gandhiquote *grab *gun *lisa *newpassword *pornhub *rainbow *scrolloftruth *supreme *worsehitler *worthless *youdied",
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
