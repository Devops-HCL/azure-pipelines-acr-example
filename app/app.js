'use strict'
const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const port = process.env.PORT || 3000

let app = express()
app.use(helmet())
app.use(logger('dev'))

app.get('/', (req, res) => {
	res.send('Hello World! V2')
})

app.get('/health', (req, res) => {
	console.log(process.env)
	let body = {
		status: 'pass',
		version: '1',
		description: 'An Azure App Service Demo using Azure DevOps and Azure Container Registry (ACR)',
		details: {
			uptime: {
				componentType: 'system',
				observedValue: process.uptime(),
				observedUnit: 's',
				status: 'pass',
				time: new Date()
			}
		}
	}
	res.json(body)
})

app.use((req, res, next) => {
  res.status(404).send('Oops - page not found.')
})

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
