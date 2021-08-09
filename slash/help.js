const { actionRow, main } = require('../constants/helpembeds');
module.exports = {
	name: 'help',
	execute: async (interaction) => {
		await interaction.reply({ embeds: [main] , components: [actionRow] })
	},
}
