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
				await interaction.update('You voted for Ameya', { ephermal: true })
				}
				if (interaction.values[0] === 'chick') {
					await interaction.update('You voted for Undied', { ephermal: true })
				}
				if (interaction.values[0] === 'simp') {
					await interaction.update('You voted for Jat', { ephermal: true })
				}
				if (interaction.values[0] === 'thicc') {
					await interaction.update('You voted for Shroud', { ephermal: true })
				}
			}
		}
	}
}