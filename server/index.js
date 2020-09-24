const express = require('express');
const db = require('../database');
const port = 3000;
const app = express();

app.listen(port, () => console.log(`Listening @ http://localhost:${port}`));