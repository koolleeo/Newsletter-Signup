const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

// initialise express instance
const app = express();

// use static function to enable use of static folder
app.use(express.static("public"));

// render sign up html page at the route /
app.get('/', function(req, res){
    res.sendFile(`${__dirname}/signup.html`);
})

app.listen(3000, function(){
    console.log('Server is now running on port 3000');
})