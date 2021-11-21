const { request } = require("undici")

exports.isScam = async function (domain) {
	const { body } = await request(`https://api.phisherman.gg/v2/domains/check/${domain}`, {
		method: 'GET',
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer: ${process.env.PHISHERMAN_KEY}`,
		}
	})
	await body.json();
	return body.classification === 'malicious' || body.classification === 'suspicious'
}