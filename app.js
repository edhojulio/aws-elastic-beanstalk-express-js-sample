const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is Edho. Welcome to my first AWS project'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
