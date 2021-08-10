module.exports = {
	name: 'interactionCreate',
	execute: async (interaction) => {
		if (!interaction.isSelectMenu()) return;
		if (interaction.customId === 'votemenu'){
			if (interaction.values[0] === 'ameya') {
			await interaction.followUp('You voted for Ameya', { ephermal: true })
			}
			if (interaction.values[0] === 'chick') {
				await interaction.followUp('You voted for Undied', { ephermal: true })
			}
			if (interaction.values[0] === 'simp') {
				await interaction.followUp('You voted for Jat', { ephermal: true })
			}
			if (interaction.values[0] === 'thicc') {
				await interaction.followUp('You voted for Shroud', { ephermal: true })
			}
		}
	}
}