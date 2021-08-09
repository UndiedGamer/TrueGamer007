const { mod, actionRow, main, fun } = require("../constants/helpembeds");

module.exports = {
	name: 'interactionCreate',
	execute: async (interaction) => {
		if (!interaction.isButton()) return;
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
}