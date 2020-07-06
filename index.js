const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.status(200).json({message: "Hello World"}))

const server = app.listen(port, ()=> console.log(`listening on port ${port}`))
module.exports = server;