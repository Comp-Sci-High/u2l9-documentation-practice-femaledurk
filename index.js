// Group Assignment: Exploring Space APIs
// In this assignment, you will use two APIs to fetch data and perform specific tasks with that data.
// The two APIs you will work with are:
// 1. The "People in Space" API, which gives information about the people currently in outer space.
// 2. The NASA Astronomy Picture of the Day (APOD) API, which provides a daily picture or video related to astronomy.

async function fetchAstronauts(requestURL) {
    let response = await fetch("http://api.open-notify.org/astros.json")  
    let data = await response.json()
    console.log (data.people[7].name)
    return data
}

// CALL your function here
fetchAstronauts()
// TASK 1: Fetch Data from the "People in Space" API

// 1. Find the "People in Space" API: http://open-notify.org/
// 2. Identify whether you need to be authenticated with an API Key, if so create an account and save your key. 
// 3. Navigate the documenation and create a request URL to fetch a list of all the people in outer space.
// 4. Make a fetch request and format your resulting JSON. 
// 5. Log the data to the console to inspect its structure.
// 6. Modify the console log to only show the name of the 8th listed person in outerspace. 


// TASK 2: Fetch Data from the NASA Astronomy Picture of the Day (APOD) API

// 1. Find the "Astronomy Picture of the Day" API: https://api.nasa.gov/
// 2. Identify whether you need to be authenticated with an API Key, if so create an account and save your key. 
// 3. Navigate the documenation and create a request URL to fetch a list of all the people in outer space.
// 4. Make a fetch request and format your resulting JSON. 
// 5. Log the data to the console to inspect its structure.
// 6. Modify the console log to only show the URL of today's astronomy picture. 

async function fetchPictures(requestURL) {
   let response = await fetch("https://api.nasa.gov/planetary/apod?api_key=j83T3nZgiDqhVRIfkwqP2fMZOuw6ZgnLTxBR06hX")   
   let data2 = await response.json()
   console.log(data2.url)
   return data2
}

// CALL your function here
fetchPictures()