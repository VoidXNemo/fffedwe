module.exports = {
  name: "say",
  description: "Makes bot say what user said.",
  execute(message, args) {
      const sayMessage = args.join(" ")
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessage);
  }
}
