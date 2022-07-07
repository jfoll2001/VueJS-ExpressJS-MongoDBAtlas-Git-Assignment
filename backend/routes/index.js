var express = require('express');
const mongodb = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/clinicsytemdb';
var router = express.Router();

const client = new mongoClient(url, { useUnifiedTopology: true });
client.connect();

//Tests to see if Collections exists and if not then creates them
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

//Gets the list of users
router.get('/loadUsers', async (req, res) => {
    await client.db().collection('users').find().toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Gets the list of doctors on load
router.get('/loadDoctors', async (req, res) => {
    await client.db().collection('doctors').find().toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Adds doctor to list
router.post('/saveDoctor', async (req, res) => {
    let form = req.body;
    await client.db().collection('doctors').insertOne(form, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Updates doctor
router.put('/updateDoctor/:updateid', async (req, res) => {
    let updateid = req.params.updateid;
    let form = req.body;
    let query = { _id: new mongodb.ObjectId(updateid) };
    let newValues = { $set: form };
    await client.db().collection('doctors').updateOne(query, newValues, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Deletes doctor
router.delete('/deleteDoctor/:id', async (req, res) => {
    let id = req.params.id;
    let query = { _id: new mongodb.ObjectId(id) };
    await client.db().collection('doctors').deleteOne(query, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Searches doctors
router.get('/searchDoctor/:param', async (req, res) => {
    let param = req.params.param;
    let query = {
        $or: [
            { fname: new RegExp(param, 'i') },
            { lname: new RegExp(param, 'i') },
            { specialty: new RegExp(param, 'i') }
        ]
    };
    await client.db().collection('doctors').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Adds user to list
router.post('/saveUser', async (req, res) => {
    let form = req.body;
    await client.db().collection('users').insertOne(form, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Updates user
router.put('/updateUser/:updateid', async (req, res) => {
    let updateid = req.params.updateid;
    let form = req.body;
    let query = { _id: new mongodb.ObjectId(updateid) };
    let newValues = { $set: form };
    await client.db().collection('users').updateOne(query, newValues, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

module.exports = router;
