const express = require('express')
const axios = require('axios')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

const baseURL = axios.create({
	baseURL: "https://api.kitadigital.my.id"
})

app.get('/', async (req, res) => {
	const url = await axios.get("https://api.kitadigital.my.id/api", {
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	}).then(response => {
    res.status(200)
		res.json({
			name: response.data.name,
			author: 'Hmdan_dev',
			instagram: 'https://www.instagram.com/hmd_dev',
      api_bank: 'https://api-bank.hmdan214.repl.co/api/bank-docs',
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
			'Content-Type': 'application/json; charset=utf-8'
		}
	}).then(response => {
    console.log(response.data);
		console.log(response.status);
		res.json(response.data);
    res.status(response.status);
	}).catch(error => {

		if (error.response) {
			console.error('Status:', error.response.status);
			console.error('Data:', error.response.data);

res.status(error.response.status);   res.json(error.response.data);
      
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
			'Content-Type': 'application/json; charset=utf-8'
		}
	}).then(response => {
    console.log(response.data);
		console.log(response.status);
		res.json(response.data);
    res.status(response.status);
	}).catch(error => {

		if (error.response) {
			console.error('Status:', error.response.status);
			console.error('Data:', error.response.data);
			
res.status(error.response.status);
      res.json(error.response.data);
      
			res.end();
				// process.exit()
			} else if (error.request) {
				console.log('No response received:', error.request);
			} else {
				console.log('Error:', error.message);
			}
		})

})

app.get('/status', (req, res) => {
  res.status(404)
})

app.listen(3000)
