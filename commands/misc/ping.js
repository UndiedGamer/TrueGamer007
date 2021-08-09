module.exports = {
	name: 'ping',
	description: 'Sends bot latency',
	aliases: ['latency', 'runtime'],
	execute(message, args, client) {
		message.channel.send(`:ping_pong: Pong Latency is **${Math.round(client.ws.ping)}**ms`);
	},
};