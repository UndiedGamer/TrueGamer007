const Discord = require('discord.js');
const mainEmbed = new Discord.MessageEmbed()
	.setTitle('🏠 Help Embed Home Page')
	.setDescription('React with 🛠️ to open moderation page')
	.addField('React with 🏓 to open fun page', '\u200b')
	.setColor(`RANDOM`)
	.setFooter('🏠 Page 1/3 More Commands soon....')
	.setTimestamp();
const modEmbed = new Discord.MessageEmbed()
	.setTitle('🛠️ Moderation Page')
	.addField('**Prune**', 'Cleares Messages in a channel Limit : 100\n Alliases : purge , clear and clean')
	.addField('**Ban**', 'Bans a member from this server (Must Mention User to Ban)')
	.addField('**Unban**', 'Unbans a user from this server (id)')
	.addField('**Poll**', `Usage : 'true poll your question here "choice1" "choice2"......max limit : 26`)
	.addField('**Snipe**', `Snipes the most recent message deleted in the channel command is used in`)
	.addField('**Invite**', `Sends bot invitation link`)
	.setColor('RANDOM')
	.setFooter('🛠️ Page 2/3 React with emojis to change pages')
	.setTimestamp();
const funEmbed = new Discord.MessageEmbed()
	.setTitle('🏓 Fun Page')
	.addField('**Ping**', 'Sends bot latency\nAliases : latency')
	.addField('**Search**', 'Searches something from urban dictionary')
	.addField('**Meme**', 'Sends a meme from r/BrawlStars')
	.addField('**Pat**', 'Pat a user')
	.addField('**Slap**', 'Slap a user')
	.addField('**Rps**', 'Usage : true rps Rock or Paper or Scissors (Anything in these)')
	.addField('**Roll**', 'Throw the die and get a random number between 1 and 6')
	.addField('**Invite**', 'Sends the bot invitation link')
	.setColor('RANDOM')
	.setFooter('🏓 Page 3/3 React with emojis to change pages')
	.setTimestamp();
const row = new Discord.MessageActionRow()
	.addComponents(
		new Discord.MessageButton()
			.setCustomId('MainButton')
			.setEmoji('🏠')
			.setStyle('PRIMARY'),
		new Discord.MessageButton()
			.setCustomId('ModButton')
			.setEmoji('🛠️')
			.setStyle('PRIMARY'),
		new Discord.MessageButton()
			.setCustomId('FunButton')
			.setEmoji('🏓')
			.setStyle('PRIMARY')
	)
module.exports = {
	main: mainEmbed,
	mod: modEmbed,
	fun: funEmbed,
	actionRow: row,
}