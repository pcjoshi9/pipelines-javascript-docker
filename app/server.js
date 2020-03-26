'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Azure AKS Demo Page !! Its a great day !!..</h1> \n');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
