const express = require('express')
const axios = require('axios')
const app = express()
const bodyParser = require('body-parser');


const baseURL = axios.create({
	baseURL: "https://api.kitadigital.my.id/api"
})

app.get('/', async (req, res) => {
	const url = await axios.get("https://api.kitadigital.my.id/api", {
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => {
		res.json({
			name: response.data.name,
			author: 'Hmdan_dev',
			instagram: 'https://www.instagram.com/hmd_dev',
			data: response.data.data
		});
		// console.log(response.data.data);
	})
	// res.json(url);
})

app.get('/api/:type/:data', async (req, res) => {

	const url = await baseURL.get(`/api/${req.params.type}/${req.params.data}`, {
		params: {
			id:  req.query.id,
			zone:  req.query.zone
		},
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => {
		res.json(response.data);
		console.log(response.data);
	}).catch(error => {

		if (error.response) {
			console.error('Status:', error.response.status);
			console.error('Data:', error.response.data);
			res.json(error.response.data);
			res.status(404);
			res.end();
				// process.exit()
			} else if (error.request) {
				console.log('No response received:', error.request);
			} else {
				console.log('Error:', error.message);
			}
		})

})

app.get('/api/:type/:data/:zone', async (req, res) => {

	const url = await baseURL.get(`/api/${req.params.type}/${req.params.data}/${req.params.zone}`, {
		params: {
			id:  req.query.id,
			zone:  req.query.zone
		},
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => {
		res.json(response.data);
		console.log(response.data);
	}).catch(error => {

		if (error.response) {
			console.error('Status:', error.response.status);
			console.error('Data:', error.response.data);
			res.json(error.response.data);
			res.status(404);
			res.end();
				// process.exit()
			} else if (error.request) {
				console.log('No response received:', error.request);
			} else {
				console.log('Error:', error.message);
			}
		})

})


app.listen(3000)
