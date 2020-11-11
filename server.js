const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const connection = require('./db/db');
const connectionLogin = require('./db/db_login');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    connectionLogin.execute("Select * from `users` where `email` = ?", [req.body.email]).then(([rows]) => {
        rows.length  ?  bcrypt.compare(req.body.password, rows[0].password).then(result => {
            result ? res.send(rows[0]) : res.send('password')
        }) : res.send('email')
    })
})

app.get('/main/:type', (req, result) => {
    if (req.params.type == 'Все машины') {
        connection.query('SELECT * FROM autos', function (err, data) {
            if (err) console.error(err); // maybe result.send(err)
            result.send(data);
        })
    }
    else {
        connection.query('SELECT * FROM autos where type = ?', [req.params.type], function (err, data) {
            if (err) console.error(err);
            result.send(data);
        })
    }
});


app.listen(5000, () => console.log(`Listening on port 5000`));