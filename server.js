const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors())


const connection = require('./db/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/main/:type', (req, result) => {
    if (req.params.type == 'Все машины') {
        connection.query('SELECT * FROM autos', function (err, data) {
            console.log('connect')
            if (err) console.error(err);
            result.send(data);
        })
    }
    else {
        connection.query('SELECT * FROM autos where type = ?', [req.params.type], function (err, data) {
            console.log('connect')
            if (err) console.error(err);
            result.send(data);
        })
    }

});


app.listen(5000, () => console.log(`Listening on port 5000`));