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

//Loads Doctors
router.get('/loadDoctors', async (req, res) => {
    await client.db().collection('doctors').find().toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Adds Doctor
router.post('/saveDoctor', async (req, res) => {
    let form = req.body;
    await client.db().collection('doctors').insertOne(form, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Updates Doctor
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

//Deletes Doctor
router.delete('/deleteDoctor/:id', async (req, res) => {
    let id = req.params.id;
    let query = { _id: new mongodb.ObjectId(id) };
    await client.db().collection('doctors').deleteOne(query, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Searches Doctors
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

//Loads User
router.get('/loadUsers', async (req, res) => {
    await client.db().collection('users').find().toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Adds User
router.post('/saveUser', async (req, res) => {
    let form = req.body;
    await client.db().collection('users').insertOne(form, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Updates User
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

//Deletes User
router.delete('/deleteUser/:id', async (req, res) => {
    let id = req.params.id;
    let query = { _id: new mongodb.ObjectId(id) };
    await client.db().collection('users').deleteOne(query, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Searches Users
router.get('/searchUser/:param', async (req, res) => {
    let param = req.params.param;
    let query = {
        $or: [
            { name: new RegExp(`^${param}$`) }
        ]
    };
    await client.db().collection('users').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Loads Patients
router.get('/loadPatients', async (req, res) => {
    await client.db().collection('patients').find().toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Adds Patient
router.post('/savePatient', async (req, res) => {
    let form = req.body;
    await client.db().collection('patients').insertOne(form, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Updates Patient
router.put('/updatePatient/:updateid', async (req, res) => {
    let updateid = req.params.updateid;
    let form = req.body;
    let query = { _id: new mongodb.ObjectId(updateid) };
    let newValues = { $set: form };
    await client.db().collection('patients').updateOne(query, newValues, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Deletes Patient
router.delete('/deletePatient/:id', async (req, res) => {
    let id = req.params.id;
    let query = { _id: new mongodb.ObjectId(id) };
    await client.db().collection('patients').deleteOne(query, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Searches Patients
router.get('/searchPatient/:param', async (req, res) => {
    let param = req.params.param;
    let query = {
        $or: [
            { fname: new RegExp(param, 'i') },
            { lname: new RegExp(param, 'i') },
            { dateofbirth: new RegExp(param, 'i') },
            { sex: new RegExp(param, 'i') }
        ]
    };
    await client.db().collection('patients').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Loads Appointments
router.get('/loadAppoints', async (req, res) => {
    await client.db().collection('appointments').find().toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

//Saves Appointment
router.post('/saveAppoint', async (req, res) => {
    let form = req.body;
    await client.db().collection('appointments').insertOne(form, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Updates Appointment
router.put('/updateAppoint/:updateid', async (req, res) => {
    let updateid = req.params.updateid;
    let form = req.body;
    let query = { _id: new mongodb.ObjectId(updateid) };
    let newValues = { $set: form };
    await client.db().collection('appointments').updateOne(query, newValues, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Deletes Appointment
router.delete('/deleteAppoint/:id', async (req, res) => {
    let id = req.params.id;
    let query = { _id: new mongodb.ObjectId(id) };
    await client.db().collection('appointments').deleteOne(query, (err, result) => {
        if (err) throw err;
        res.end();
    });
});

//Searches Appointments
router.get('/searchAppoint/:param', async (req, res) => {
    let param = req.params.param;
    let query = {
        $or: [
            { patient: new RegExp(param, 'i') },
            { doctor: new RegExp(param, 'i') },
            { status: new RegExp(param, 'i') },
            { location: new RegExp(param, 'i') },
            { date: new RegExp(param, 'i') },
            { time: new RegExp(param, 'i') }
        ]
    };
    await client.db().collection('appointments').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
});

module.exports = router;
