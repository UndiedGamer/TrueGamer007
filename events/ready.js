module.exports = {
	name: 'ready',
	once: true,
	execute: async (client) => {
		console.log(`${client.user.tag} is ready!`);
		const data = [
			{
				name: 'help',
				description: 'Help command',
			},
			{
				name: 'vote',
				description: 'Vote for someone',
			}
		];
		await client.guilds.cache.get('859287138364030977').commands.set(data);
	}
}