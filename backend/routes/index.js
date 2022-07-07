var express = require('express');
const mongodb = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/clinicsytemdb';
var router = express.Router();

const client = new mongoClient(url, { useUnifiedTopology: true });
client.connect();

router.get('/testCollections', async (req, res) => {
    var msg = '';
    await client.db().listCollections({ name: 'users' }, { name: 'doctors' }, { name: 'patients' }, { name: 'appointments' }).next(async function (err, collinfo) {
        if (err) throw err;
        if (collinfo) {
            console.log('Collections already exist');
            msg = 'Collections already exist';
            res.end(msg);
        }
        else {
            await client.db().createCollection('users', async (err, result) => {
                if (err) throw err;
                msg = 'Collection successfully created';
                res.end(msg);
            });
        }
    });
});

//Gets the list of users for the login
router.get('/loginUsers', async (req, res) => {
    await client.db().collection('users').find().toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));      
        res.end();
    });
});

module.exports = router;
