const { request } = require("undici")

exports.isScam = async function (domain) {
	const { classification } = await request(`https://api.phisherman.gg/v2/domains/check/${domain}`, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer: ${process.env.PHISHERMAN_KEY}`,
		}
	})
	return classification === 'malicious' || classification === 'suspicious'
}