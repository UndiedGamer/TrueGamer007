const Discord = require('discord.js');

module.exports = {
	name: 'eval',
	execute: async (message, args, client) => {
		if (message.author.id !== "564468550727761920") return message.reply("You cannot use this command!");
		const clean = (taxt) => {
			if (typeof taxt === "string") {
				return taxt
					.replaceAll("`", "`" + String.fromCharCode(8203))
					.replaceAll("@", "@" + String.fromCharCode(8203));
			}
			else {
				return taxt;
			}
		}; 
		try {
			var result = args.join(" ");
			let noResultArg = new Discord.MessageEmbed()
				.setColor("#e31212")
				.setDescription("ERROR: No valid eval args were provided");
			if (!result) return message.channel.send({ embeds: [noResultArg] });
			let evaled = eval(result);

			let resultSuccess = new Discord.MessageEmbed()
				.setColor("#8f82ff")
				.setTitle(`Success`)
				.addField(`Input:\n`, "```js\n" + `${args.join(" ")}` + "```", false)
				.addField(`Output:\n`, "```js\n" + clean(evaled) + "```", true);

			message.channel.send({ embeds: [resultSuccess] });
		}
		catch (err) {
			let resultError = new Discord.MessageEmbed()
				.setColor("#e31212")
				.setTitle(`An error has occured`)
				.addField(`Input:\n`, "```js\n" + `${result}` + "```", false)
				.addField(`Output:\n`, "```js\n" + `${clean(err)}` + "```", true);
			return message.channel.send({ embeds: [resultError] });
		}
	}
}
