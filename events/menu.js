module.exports = {
	name: 'interactionCreate',
	execute: async (interaction) => {
		if (!interaction.isSelectMenu()) return;
		if (interaction.customId === 'votemenu'){
			if (interaction.value === 'ameya') {
			await interaction.followUp('You voted for Ameya', { ephermal: true })
			}
			if (interaction.value === 'chick') {
				await interaction.followUp('You voted for Undied', { ephermal: true })
			}
			if (interaction.value === 'simp') {
				await interaction.followUp('You voted for Jat', { ephermal: true })
			}
			if (interaction.value === 'thicc') {
				await interaction.followUp('You voted for Shroud', { ephermal: true })
			}
		}
	}
}