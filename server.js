// Setup empty JS object to act as endpoint for all routes

//projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
  function listening(){
    console.log('running on a server');
    console.log(`running on localhost: ${port}`);
  };

projectData = [];

//GET data from projectData[]
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);

};

//POST data to projectData[]
app.post('/saveData', saveData);

function saveData (req, res) {

    const newEntry = {
        date: req.body.date,
        temp: req.body.temp*1.8-459.67,
        zip: req.body.zip,
        city: req.body.city,
        input: req.body.input,

    }
    console.log(newEntry);
    projectData.push(newEntry);
    res.send(newEntry);

};

app.get('/test',(req,res)=>{
  res.send("Hi, the server is still working...")
})