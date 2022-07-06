var express = require('express');
const mongodb = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/clinicsystem';
var router = express.Router();

const client = new mongoClient(url, { useUnifiedTopology: true });
client.connect();
console.log(url)

module.exports = router;
