const googleMapsClient = require('@google/maps').createClient({
	key: process.env.GEO_LOCATION_GOOGLE_KEY,
	Promise
})

async function getLocation(address) {
	return googleMapsClient
		.geocode({
			address: address
		})
		.asPromise()
		.then((response) => {
			if (
				response.status !== 200 ||
				response.json.status === 'ZERO_RESULTS'
			) {
				return
			}
			const coordinates =
				response.json.results[0] &&
				response.json.results[0].geometry &&
				response.json.results[0].geometry.location
					? {
							latitude:
								response.json.results[0].geometry.location.lat,
							longitude:
								response.json.results[0].geometry.location.lng
					  }
					: undefined

			return coordinates
		})
		.catch(console.error)
}

module.exports = { getLocation }
