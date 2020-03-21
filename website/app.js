/* Global Variables */
const key = '&APPID=f5df508e3320a305491c8da09aba3fd8'; // - Your API key is f5df508e3320a305491c8da09aba3fd8
// Please, use the endpoint api.openweathermap.org for your API calls
/*
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f5df508e3320a305491c8da09aba3fd8
*/
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

//Event listener 
document.getElementById('generate').addEventListener('click', performAction); // jumps to performAction

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'-'+ d.getDate()+'-'+ d.getFullYear(); // note zero based month

function performAction (e) {
    getWeather(`${baseURL}${zip}${key}`) // jumps to getWeather
    .then(function(apiData) { // apiData = {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 16093, ...}
        const input = document.getElementById('feelings').value; // reads the feelings entered
      postData('/saveData',{date: newDate, temp: apiData.temp, input: input, zip: apiData.zip}) // jumps to postData
      //postData('/saveData',{date: newDate, temp: apiData.main.temp, input: input,zip: apiData.name})
    .then(
        updateUI()
        )
    });
};

//GET async
const getWeather = async (url) =>{ // url = "http://api.openweathermap.org/data/2.5/weather?q=[object HTMLInputElement]&APPID=f5df508e3320a305491c8da09aba3fd8"

    const zip = document.getElementById('zip').value; // reads the zip code entered // zip = "01754"
    const response = await fetch (`${baseURL}${zip}${key}`); // url
    try {
        const apiData = response.json();
        //console.log('getWeather from this URL:'+`${baseURL}${zip}${key}`);
        console.log('apiData' + apiData);
        return apiData; // return weather data to .then function

    } catch (error) {
        console.log('There is an error in the GET update...'+ error);
    };
};

//POST async
const postData = async function ( url='',data = {}) { // url = "/saveData", data = {date: "2-21-2020", temp: undefined, input: "ghjklhbgvgkllllllllllllllllllllll", zip: undefined
    const res = await fetch (url, {
        method:'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = res.json();
        console.log(newData);
        return newData;
    }catch (error){
        console.log('There is an error in the POST update...'+ error);
    };
};

//update UI
const updateUI = async () => {
    const request = await fetch ('/all')
    try{
        const serverData = await request.json()
        console.log(serverData);
        console.log(serverData[0]);
        document.getElementById('zip').innerHTML = serverData[serverData.length-1].zip;
        document.getElementById('date').innerHTML = serverData[serverData.length-1].date;
        document.getElementById('temp').innerHTML = serverData[serverData.length-1].temp+'°C';
        document.getElementById('input').innerHTML = serverData[serverData.length-1].input;

    }catch (error){
        console.log('There is an error in the UI update...'+ error);
    };
};


