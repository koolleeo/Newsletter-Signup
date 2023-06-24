const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use('/', function(req, res){
    res.send('<h1>Server is now up and running</h1>');
})


app.listen(3000, function(){
    console.log('Server is now running on port 3000');
})