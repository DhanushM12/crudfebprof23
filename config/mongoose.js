const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://0.0.0.0:27017/crud_febprof23');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Connection problem"));

db.on('open', function(){
    console.log("Connected to MongoDB Successfully")
})

module.exports = db;