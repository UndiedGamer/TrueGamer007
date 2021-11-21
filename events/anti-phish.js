const { isScam } = require("../constants/phisherman");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "messageCreate",
  execute: async (message, client) => {
    const uriRegex =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const old = message.content;
    if (message.content.match(uriRegex)) {
      const url = uriRegex.exec(message.content)[0].replace("www.", "");
      if (isScam(url)) {
        if (message.member.kickable) {
          message.member.kick();
        }
        message.delete();
        const embed = new MessageEmbed()
          .setTitle("Phish Caught!")
          .setDescription(
            `A message from \`${message.author.tag}\` has been deleted because it contained a scam link\nContent: ${old}\nLink: ${url}`
          )
          .setTimestamp()
          .setColor("RED")
          .setFooter(`ID: ${message.member.user.id}`);
        const channel = message.guild.channels.cache.find(
          (ch) => ch.id === "909725833822867467"
        );
        return channel.send({ embeds: [embed] });
      }
    }
  },
};
