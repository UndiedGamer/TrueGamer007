module.exports = {
	name: 'ban',
	permissions: 'BAN_MEMBERS',
	args: true,
	usage: '<target>',
	execute: async (message, args, client) => {
		const breason = args.join(" ").slice(22);
		const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.displayName === args[0]) || message.guild.members.cache.find(r => r.user.tag === args[0]);
		if (message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
			if (target) {
				try {
					const banned = target;
					const embed = new Discord.MessageEmbed()
						.setTitle('Banned')
						.setDescription(`You've Been Banned From ${ban.guild}
					**Reason :** 
					
					If You Wish To Appeal For Your Ban, Click The Link Below
					Also You'll Get Only **1 Chance** To Appeal So Answer The Questions Asked Properly
					[Appeal Link](https://tg-ban-appeals.netlify.app/) `)
						.setColor('#FF0000')
						.setTimestamp();
					banned.send(embed);
					target.ban({ reason: breason });
					setTimeout(() => message.delete(), 10);
					message.channel.send(`Successfully banned **${target.tag}**!`)
						.then(msg => {
							setTimeout(() => msg.delete(), 5000);
						});
				}
				catch {
					message.reply(`I do not have permissions to ban **${target}**`);
				}
			}
		}
	}
}