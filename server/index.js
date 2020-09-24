const express = require('express');
const db = require('../database');
const path = require('path');
const port = 3000;
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/stays/:stayId', (req, res) => {
    var data = req.params.stayId; //string
    db.getRoomData(data, (err, results) => {
        if (err) {
            console.log(`Err @ [ app.get ] ::: ${err}`);
            res.status(400).send(err);
        } else {
            console.log('Get Sucessfull');
            res.status(200).send(results);
        }
    });
});

app.listen(port, () => console.log(`Listening @ http://localhost:${port}`));