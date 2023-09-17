const express = require('express');
const app = express();
const port = 8080;

const db = require('./config/mongoose')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h2>REST APIs CRUD Apps</h2>')
})

const studentRouter = require('./routes/index');

app.use('/student', studentRouter)

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Successfully running on port : ${port}`);
})