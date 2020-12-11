const Discord = require("discord.js"),
      { post } = require("node-superfetch");
    
module.exports = {
    name: 'eval',
    description: 'Draws an image or a user\'s avatar but distorted.',
    aliases: [],
    usage: ' [level] [user]',
    cooldown: 2,
    args: -1,
    catergory: 'Memes/Images Manipulation',
    async execute(message, args, client) {
        if (!client.config.ownerid.includes(message.author.id)) return;
  
        const embed = new Discord.MessageEmbed()
        .addField("Input", "```js\n" + args.join(" ") + "```");
        
        try {
          const code = args.join(" ");
          if (!code) return message.channel.send("Please include the code.");
          let evaled;
          
          // This method is to prevent someone that you trust, open the secret shit here.
          if (code.includes(`token`) || code.includes(`TOKEN`) || code.includes("process.env")) {
            evaled = "No, shut up, what will you do it with the token?";
          } else {
            evaled = eval(code);
          }
          
          if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
          
          let output = clean(evaled);
          if (output.length > 1024) {
            // If the output was more than 1024 characters, we're gonna export them into the hastebin.
            const {body} = await post("https://hastebin.com/documents").send(output);
            embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(b19cd9);
            // Sometimes, the body.key will turn into undefined. It might be the API is under maintenance or broken.
          } else {
            embed.addField("Output", "```js\n" + output + "```").setColor(b19cd9)
          }
          
          message.channel.send(embed);
          
        } catch (error) {
          let err = clean(error);
          if (err.length > 1024) {
            // Do the same like above if the error output was more than 1024 characters.
            const {body} = await post("https://hastebin.com/documents").send(err);
            embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("b19cd9");
          } else {
            embed.addField("Output", "```js\n" + err + "```").setColor("b19cd9");
          }
          
          message.channel.send(embed);
        }
      }
}