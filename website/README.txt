***************************************************

**************  Getting Started  ******************

***************************************************

Introduction

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.
Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the Weather-Journal project rubric. Please review the rubric for detailed project requirements. If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own. But, it can be a bit challenging having to start from scratch, so we do provide a starter project (i.e., a "skeleton") to use.
Get the Starter Code

You can download the starter code below by cloning the specific branch 'refresh-2019':

    The Weather Journal project repository

The starter code has all the elements and CSS you will need to complete the project, plus a little help getting started with the JavaScript. If you decide to start development on your own and then get stuck, you can always take a peek at the starter code available at the links provided for inspiration.

If you want to try the project without the starter code, and would like to use a comments only version of the finished JS code, you can find that at the link below.

    Comments only version of final JS code (commentsOnlyJS directory)

Web APIs and Asynchronous Applications

Great! You now have the starter code. Before moving forward, make sure you are comfortable with the content from Web APIs and Asynchronous Applications.

Ask yourself:

    How do I setup a Node environment with Express and the necessary project dependencies?
    How do I setup a server with GET and POST routes?
    How do I create developer credentials for a Web API?
    How do I use the Fetch API with my credentials and user input to get dynamic data into my app routes?
    How do I access a GET route on the server side, from a function called on the client side?
    How do I chain Promises together
    How do I access HTML elements with JavaScript and set their properties dynamically?

****************************************************

**************  Development Strategy  **************

****************************************************

For this project, you will be writing most of your code in two files: server.js and website/app.js. Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.
Testing

Testing your code as you go is an excellent development approach. If you would like to write and run tests for parts of your implementation code, you can use the file tests.js to see examples of test code you might write along the development path.

Feel free to implement your own design workflow, but if you get stuck -- here is a walkthrough to get you up and running!

    Start by setting up your project environment. Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and them include them your server.js file.
        Create a server running on the port of your choosing
        Add a console.log() to the server callback function, and test that your server is running using Node in the terminal to run the file server.js
    Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
        The POST route should anticipate receiving three pieces of data from the request body
            temperature
            date
            user response
        Make sure your POST route is setup to add each of these values with a key to projectData.
    Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
        Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
        Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
        Inside that callback function call your async GET request with the parameters:
            base url
            user entered zip code (see input in html with id zip)
            personal API key

    After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
        You will need to write another async function to make this POST request.
        The function should receive a path and a data object.
        The data object should include
            temperature
            date
            user response
        Remember, you can access the value of DOM elements by selecting them in your JS code.

    Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:
        Temperature
        Date
        User input

******************************************************************

******************  Project Environment Setup  *******************

******************************************************************
Criteria 	Meets Specifications

Node and Express Environment

Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.

The Express app instance should be pointed to the project folder with .html, .css, and .js files.

Project Dependencies

The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

The body-parser package should be installed and included in the project.

Local Server	

Local server should be running and producing feedback to the Command Line through a working callback function.

API Credentials
	

Create API credentials on OpenWeatherMap.com

APIs and Routes
Criteria 	Meets Specifications

APP API Endpoint
	

There should be a JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.

Integrating OpenWeatherMap API
	

The personal API Key for OpenWeatherMap API is saved in a named const variable.

The API Key variable is passed as a parameter to fetch() .

Data is successfully returned from the external API.

Return Endpoint Data

GET Route I: Server Side
	

There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.

Return Endpoint Data

GET Route II: Client Side
	

There should be an asynchronous function to fetch the data from the app endpoint

POST Route
	

You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.

The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.

The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.

Dynamic UI
Criteria 	Meets Specifications

Naming HTML Inputs and Buttons For Interaction
	

The input element with the placeholder property set to “enter zip code here” should have an id of zip.

The textarea included in project HTML should have an id of feelings.

The button included in project HTML should have an id of generate.

Assigning Element Properties Dynamically
	

The div with the id, entryHolder should have three child divs with the ids:

    date
    temp
    content

Event Listeners
	

Adds an event listener to an existing HTML button from DOM using Vanilla JS.

In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.

Dynamically Update UI
	

Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.

Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.

