module.exports = {
	name: 'unban',
	args: true,
	usage: '<targetId>',
	permissions: 'BAN_MEMBERS',
	execute: async (message, args, client) => {
			const userID = args[0];
			message.guild.bans.fetch().then(bans=> {
				if(bans.size == 0) return;
				const bUser = bans.find(b => b.user.id == userID);
				if(!bUser) return;
				message.guild.members.unban(bUser.user);
				message.delete({ timeout : 1 });
				message.channel.send(`Successfully unbanned <@${userID}>`)
					.then(msg => {
						setTimeout(() => msg.delete(), 5000);
					});
			});
	}
}