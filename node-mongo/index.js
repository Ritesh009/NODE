const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) =>{
    assert.equal(err, null); // Checks if error is equal to null

    console.log('Connected to the server!');

    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({"name": "test02", "description": "test"},
    (err, result) => {
        assert.equal(err, null);

        console.log('After Insert:\n');
        console.log(result.ops); //prints no. of operation have been performed

        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);

            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);

                client.close();
            });
        });
    });
});