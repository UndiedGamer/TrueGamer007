module.exports = {
	name: 'deploy',
	execute: async (message, args, client) => {
		if (!message.author.id === "564468550727761920") return message.reply("You cannot use this command!");
		try {
			client.votes.set('551758246701170688', 0) // Ameya
			client.votes.set('574877426035982346', 0) // Shroud
			client.votes.set('564468550727761920', 0) // Undied
			client.votes.set('691916925030367243', 0) // Jat
		}
		catch (err) {
			console.error(err)
		}
	}
}