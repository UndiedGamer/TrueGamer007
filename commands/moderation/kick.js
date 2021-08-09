module.exports = {
	name: 'kick',
	permissions: 'KICK_MEMBERS',
	args: true,
	usage: '<target>',
	execute: async (message, args, client) => {
		const reason = args.join(" ").slice(22);
		const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.displayName === args[0]) || message.guild.members.cache.find(r => r.user.tag === args[0]);
			if (target) {
				try {
					target.kick(reason);
					setTimeout(() => message.delete(), 10);
					message.channel.send(`Successfully kicked **${target.user.tag}**!`)
						.then(msg => {
							setTimeout(() => msg.delete(), 5000);
						});
				}
				catch {
					message.reply(`I do not have permissions to kick **${target.user.tag}**`);
				}
			}
			else {
				message.reply(`You do not have permissions to kick **${target.user.tag}**`);
			}
	}
}