module.exports = {
	name: 'snipe',
	execute: async (message, args, client) => {
		if (message.member.permissions.has('MANAGE_MESSAGES') || message.member.roles.cache.some(r => r.id === "846350063819292714")) return;
			const msg = client.snipes.get(message.channel.id);
			if (!msg) return message.reply("Didn't find any deleted messages.");
			const embed = new Discord.MessageEmbed()
				.setAuthor(msg.author, msg.member.user.displayAvatarURL())
				.setDescription(msg.content)
				.setColor('RANDOM')
				.setFooter('Get sniped lol')
				.setTimestamp();
			if (msg.image) embed.setImage(msg.image);
			message.channel.send({ embeds: [embed] });
	}
}