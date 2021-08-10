const { actionRow } = require("../constants/voteconst")

module.exports = {
	name: 'vote',
	execute: async (interaction) => {
		await interaction.reply({ content: `Hello ${interaction.user}! please select something from below`, components: [actionRow], ephermal: true })
	}
}