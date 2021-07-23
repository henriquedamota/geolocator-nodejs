require('dotenv').config()
const fs = require('fs')
const endOfLine = require('os').EOL
const { getLocation } = require('./getGoogleLocation')
const outputLatitude = fs.createWriteStream('output-latitude.txt', {})
const outputLongitude = fs.createWriteStream('output-longitude.txt', {})

fs.readFile('input-address.txt', 'utf-8', async (err, file) => {
	try {
		const lines = file.split('\n')
		for (let address of lines) {
			const coordinates = await getLocation(address)
			console.log({ address, coordinates })
			if (coordinates) {
				outputLatitude.write(`${coordinates.latitude} ${endOfLine}`)
				outputLongitude.write(`${coordinates.longitude} ${endOfLine}`)
			} else {
				outputLatitude.write(`NULL ${endOfLine}`)
				outputLongitude.write(`NULL ${endOfLine}`)
			}
		}
	} catch (error) {
		console.log({ err })
	}
})
