const { Message, Client, MessageEmbed } = require('discord.js');
const { isScam } = require('../constants/phisherman');

module.exports = {
	name: 'messageCreate',
	/**
	 * 
	 * @param {Message} message 
	 * @param {Client} client 
	 * @returns 
	 */
	execute: async (message, client) => {
		const prefix = 'true '
		if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();
		const command = client.commands.get(commandName)
			|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) return;
		if (command.permissions) {
			const authorPerms = message.channel.permissionsFor(message.author);
			if (!authorPerms || !authorPerms.has(command.permissions)) {
				return message.reply('You cannot run this command!');
			}
		}
		if (command.args && !args.length) {
			let reply = `You didn't provide any arguments, ${message.author}!`;
		
			if (command.usage) {
				reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
			}
		
			return message.reply(reply);
		}

		try {
			command.execute(message, args, client);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}

		const uriRegex =
			/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
		if (message.content.match(uriRegex)) {
			const url = uriRegex.exec(message.content)[0].replace('www.', '');
			if (isScam(url)) {
				if (message.member.kickable) {
					message.member.kick();
				}
				const embed = new MessageEmbed()
				.setTitle('Phish Caught!').setDescription(`${url} sent in #${message.channel.name} by ${message.author.tag}`).setTimestamp().setFooter(`ID: ${message.member.user.id}`)
			const channel = message.guild.channels.cache.find(
        (ch) => ch.id === "909725833822867467"
			);
				return channel.send({ embeds: [embed] });
			}
		}
	}
}