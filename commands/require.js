const answers = [
  'require(4325746241).gift("Name")',
  'require(5608065093).load("Name")',
  'require(5663568331).dvsg("Name")',
  'require(5168813758):NukeButton("Name")',
  'require(5125902524).load("Name")',
  'require(5098731275).eliza("Name")',
  'require(4925713221).load("Name")',
  'require(4578105624).a("Name")',
  'require(5352138951).bendy("Name")',
  'require(5870041488).pgr("Name")',
  'require(5553264131).Frosty("Name")',
  'require(5786400581).load("Name")',
  'require(5813080460).load("Name")',
  'require(5888706621).eliza("Name","eliza")',
  'require(5224381761).Nitro("Name")',
  'require(5814638589).dust("Name")',
  'require(5481205395).load("Name")',
  'require(4687232142).disp("Name")',
  'require(5127730212)("Name")',
  'require(5327970642).piggy("Name")',
  'require(5673170715).Leak("Name")',
  'require(5552065204).Robrac2washereholy("Name")',
  'require(5121570975).SpaghettiHub("Name")',
  'require(5001982403).undetected("Name")'
]

module.exports = {
  name: 'require',
  description: "The bot will say a random require",
  aliases: ['ball', 'ask'],
  usage: ' [question]',
  cooldown: 2,
  args: -1,
  catergory: 'Fun',
  async execute(message, args, client) {
    try {
      let Message = `Random Require: \`${answers[Math.floor(Math.random() * answers.length)]}\``;
      return message.channel.send({
        embed: {
          title: "Random Require",
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

