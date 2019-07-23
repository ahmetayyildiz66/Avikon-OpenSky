const express = require('express');
const app = express();

const api_call = require('./API_caller')

const url = 'https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226';

app.get('/', (req, res) => {
    res.send('App works!')
});

app.get('/getOpenSky', (req, res) => {
    api_call.API_Call(url)
        .then(response => {
            console.log('Basarili')
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
});

app.listen(3000, () => {
    console.log('Listening on port: 3000');
});