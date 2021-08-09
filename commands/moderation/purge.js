module.exports = {
	name: 'prune',
	aliases: ['purge', 'clear', 'clean'],
	description: 'Prune up to 99 messages.',
	permissions: 'MANAGE_MESSAGES',
	execute(message, args, client) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99');
		}

		message.channel.bulkDelete(amount, true);
		message.channel.send(`Alright deleted ${args} messages`)
			.then(msg => {
				setTimeout(() => msg.delete(), 2000);
			}).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to prune messages in this channel!');
			});
	},
};