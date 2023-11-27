"use strict"
/* -------------------------------------------------------
	EXPRESS - Personnel API
------------------------------------------------------- */
require('dotenv').config()
const HOST = 'https://mern-stack-block-app.vercel.app/' 
const PORT = process.env?.PORT || 8000
/* ------------------------------------------------------- */
const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "http://www.clarusway.com/#",
		contact: { name: packageJson.author, email: "kplnhsyn.49@gmail.com" },
		license: { name: packageJson.license, },
	},
	host: `${HOST}:${PORT}`,
	basePath: '/',
	schemes: ['http', 'https'],
	securityDefinitions: {
		Token: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'SimpleToken Auth * Example: <b>Token <i>...tokenKey...<i></b>'
		},
	},
	security: [{ Token: true }],
	definition: {
		// Models:
		"User": require('./src/models/user').schema.obj,
		"Blog": require('./src/models/blog').schema.obj,
		"Category": require('./src/models/category').schema.obj,
		"Comment": require('./src/models/comment').schema.obj,
		"Like": require('./src/models/like').schema.obj,
		"View": require('./src/models/view').schema.obj,		
		
	}
}

const routes = ['./index.js']
const outputFile = './src/configs/swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)