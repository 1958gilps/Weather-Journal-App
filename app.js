/* Global Variables */
const key = 'f5df508e3320a305491c8da09aba3fd8'; // - Your API key is f5df508e3320a305491c8da09aba3fd8
// Please, use the endpoint api.openweathermap.org for your API calls
/*
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f5df508e3320a305491c8da09aba3fd8
*/
//const baseURL = '';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

//Event listener 
document.getElementById('generate').addEventListener('click', performAction);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'-'+ d.getDate()+'-'+ d.getFullYear();

function performAction (e) {
    getWeather(`${baseURL}${zip}${key}`)
    .then(function(apiData) {
        const input = document.getElementById('feelings').value;
      postData('/saveData',{date: newDate, temp: apiData.main.temp, input: input,zip: apiData.name})
    .then(
        updateUI()
        )
    });
};

//GET async
const getWeather = async (url) =>{
    const zip = document.getElementById('zip').value;
    const response = await fetch (`${baseURL}${zip}${key}`);
    try {
        const apiData = response.json();
        console.log('getWeather from this URL:'+`${baseURL}${zip}${key}`);
        return apiData;

    } catch (error) {
        console.log('There is an error in the GDET update...'+ error);
    };
};

//POST async
const postData = async function ( url='',data = {}) {
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
        console.log(serverData[-1]);
        document.getElementById('name').innerHTML = serverData[serverData.length-1].zip;
        document.getElementById('date').innerHTML = serverData[serverData.length-1].date;
        document.getElementById('temp').innerHTML = serverData[serverData.length-1].temp+'°C';
        document.getElementById('content').innerHTML = serverData[serverData.length-1].input;

    }catch (error){
        console.log('There is an error in the UI update...'+ error);
    };
};


