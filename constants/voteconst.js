const Discord = require("discord.js");

const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('votemenu')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Ameya',
							description: 'Vote for Ameya',
							value: 'ameya',
						},
						{
							label: 'Shroud',
							description: 'Vote for Shroud',
							value: 'thicc',
						},
						{
							label: 'Undied',
							description: 'Vote for Undied',
							value: 'chick',
						},
						{
							label: 'Jat',
							description: 'Vote for Jat',
							value: 'simp',
						},
					]),
);
module.exports = {
	actionRow: row
}