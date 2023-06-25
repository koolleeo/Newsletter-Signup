const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const https = require('https');
const donenv = require('dotenv').config();

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

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    // capture data from body of form >> POST
    const data = {

        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

// use JSON.stringify to convert json to string before POST
const jsonData = JSON.stringify(data);

// define URL
const url = `https://us13.api.mailchimp.com/3.0/lists/${process.env.LISTID}`;

// define options to pass as a parameter
const options = {
    method: "POST",
    auth: `koolleeo:${process.env.APIKEY}`
}

// make HTTPS request and save as const
const request = https.request(url, options, function(response){
    response.on("data", function(data){
        const parsedData = JSON.parse(data);
        
        //log to console to validate 
        console.log(parsedData);

        // log to page to validate within browser
        res.send(parsedData);

    })
})

// POST input jsonData to mailchimp
request.write(jsonData);
request.end();

})

app.listen(3000, function(){
    console.log('Server is now running on port 3000');
})