const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection')


const PORT = process.env.PORT || 8080;
const HOST = 'localhost'

connection.connect();

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/role', require('./routes_role'));
app.use('/access', require('./routes_access'));

app.listen(PORT, () => console.log(`Service starts on http://${HOST}:${PORT}`));
