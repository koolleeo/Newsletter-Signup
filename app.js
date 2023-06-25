const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

// initialise express instance
const app = express();

// use static function to enable use of static folder
app.use(express.static("public"));

// set up bodyparser
app.use(bodyParser.urlencoded({extended: true}));

// render sign up html page at the route /
app.get('/', function(req, res){
    res.sendFile(`${__dirname}/signup.html`);
})

// capture post requests from form
app.post('/', function(req, res){

    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    console.log(firstName, lastName, email)
    
})

app.listen(3000, function(){
    console.log('Server is now running on port 3000');
})