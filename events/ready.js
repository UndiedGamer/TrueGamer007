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
		await client.guilds.cache.get('569462441851879454').commands.set(data);
	}
}