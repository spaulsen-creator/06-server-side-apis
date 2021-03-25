
var searchBtn = document.getElementById('get-weather');
searchBtn.addEventListener('click', getApi);


function getApi(event) {
  event.preventDefault();
  //fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=denver&units=imperial&appid=820c7f8138019a10c7af3d05720e11d9';
  // using frequent console.log() to check function
  console.log('click');

  //grab user input
 var citySearch = document.getElementById('city-search').value;


  console.log(citySearch);

  //construct new request url- dynamic pull
// make the fetch call
  //console log data from fetch
  // traverse data 
  // display on page

}


  //5 day weather fetch function.
  // function getFiveDay(event) {
  //   event.preventDefault();
  //   fetch(fiveDayUrl)
  //       .then(function (response) {
  //           return response.json();
  //       })
  //       .then(function (data) {
  //           console.log(data);
  //       });

  //     }        
//dial into specific arrauy data with the console.log


//    lesson 3 week 6  
