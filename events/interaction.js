const { mod, actionRow, main, fun } = require("../constants/helpembeds");

module.exports = {
	name: 'interactionCreate',
	execute: async (interaction, client) => {
		if (interaction.isCommand()) {
			if (!client.commands.has(interaction.commandName)) return;
			try {
				await client.commands.get(interaction.commandName).execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
		if (interaction.isButton()) {
			const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 7000 });

			collector.on('collect', async i => {
				if (i.customId === 'ModButton') {
					await i.update({ embeds: [mod], components: [actionRow] });
				}
				if (i.customId === 'MainButton') {
					await i.update({ embeds: [main], components: [actionRow] })
				}
				if (i.customId === 'FunButton') {
					await i.update({ embeds: [fun], components: [actionRow] }) 
				}
			});
			collector.on('end', collected => console.log(`Collected ${collected.size} items`));
		}
		if (interaction.isSelectMenu()) {
			if (interaction.customId === 'votemenu'){
				if (interaction.values[0] === 'ameya') {
					let currentVotes = parseInt(client.votes.get('551758246701170688'))
					client.votes.set('551758246701170688', currentVotes += 1)
					await interaction.update(`Ameya now has ${currentVotes += 1} votes`)
				}
				if (interaction.values[0] === 'chick') {
					let currentVotes = parseInt(client.votes.get('564468550727761920'))
					client.votes.set('564468550727761920', currentVotes += 1)
					await interaction.update(`Undied now has ${currentVotes += 1} votes`)
				}
				if (interaction.values[0] === 'simp') {
					let currentVotes = parseInt(client.votes.get('691916925030367243'))
					client.votes.set('691916925030367243', currentVotes += 1)
					await interaction.update(`Jat now has ${currentVotes += 1} votes`)
				}
				if (interaction.values[0] === 'thicc') {
					let currentVotes = parseInt(client.votes.get('574877426035982346'))
					client.votes.set('574877426035982346', currentVotes += 1)
					await interaction.update(`Shroud now has ${currentVotes += 1} votes`)
				}
			}
		}
	}
}