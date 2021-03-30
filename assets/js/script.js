
let weatherContainer = document.getElementById('weather');
let forecastContainer = document.getElementById('five-day');
let historyContainer = document.getElementById('history');
let searchCity = document.querySelector('#search-city');
let searchButton = document.getElementById('search-button');
let apiKey = '7b56d24fc2a9f800b5f359ee3bc2a2f5';
//let cityArray = [];
//searchBtn.addEventListener('click', getApi);

let formSubmitHandler = function (event) {
  event.preventDefault();

  let cityname = searchCity.value.trim();

  if (cityname) {
    getCityNames (cityname) ;
    searchCity.textContent = '';
    nameInputEl.Value = '';
  } else {
      alert('Please select a city.');
  }
};




function getApi(event) {
  event.preventDefault();  
  // stops default click   
  let searchValue = document.getElementById('search-city').value;
 
  console.log(searchValue)
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=imperial`;
 
  fetch(requestUrl)
    .then(function (response) {
      return response.json()
    })

    .then(function (data) {
      console.log(data)
      document.querySelector('#search-city').value = "";
      // $('#search-city').val('')

console.log('humidity:', data.main.humidity);
console.log('weather:', data.main.temp);
console.log('name:', data.name)
document.querySelector('.results').textContent = data.main.humidity;
//document.querySelector('.results').textContent = data.main.temp;







      
      // let temp = document.createElement('div');
      // temp.textContent = "Temp: " + DataTransfer.main.temp + "F";
      // temp.classList = "list-group";

      // let cityEl = document.createElement('h3');
      // cityEl.textContent = data.name;

      // let humidity = document.createElement('div');
      // humidity.textContent = "Humidity: " + data.main.humidity + "% ";
      // humidity.classList = "list-group";

      // let weatherIcon = document.createElement('img');
      // weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
      // cityEl.appendChild(wetaherIcon);

      // let currentDate = document.createElement('div');
      // currentDate.textContent = " (" + moment(data.value).calendar("MMM D, YYYY") + ") ";
      // cityEl.append(currentDate);
   })
}
searchButton.addEventListener('click', getApi);

// function savedCities(searchedCity) {
//   cityArray.push(citySearch)
//   console.log('city array variable: ', cityArray);
//   localStorage.setItem('cities', JSON.stringify(cityArray));

// }

// function citySearchSubmit(event) {
//   event.preventDefault();
//   let citySearch = document.querySelector('#citySearch').value;
//   if (!citySearch) {
//     console.error('Please select a city');
//     return;
//   }

//   savedCities(citySearch)
//   let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=imperial`;

//   // fetch(requestUrl)
//   //   .then(function (response) {
//   //     return response.json()
//   //   })

//     .then(function (currentData) {
//       console.log(currentData)
//       let currentCity = document.querySelector('#selectedCity');
//       let currentDayWeather = document.querySelector('#current-dayweather');
//     })
// }


// function getApi(event) {
//   event.preventDefault();
//   // stops default click   
//   var requestUrl = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={apiKey}';
//   // using frequent console.log() to check function
//   console.log('click');

//   fetch(requestUrl)
//    .then(function (response) {
//      return response.json();
//    })
//    .then(function (data) {
//      console.log(data)
//   });
// }  

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);

  //grab user input
 //var citySearch = document.getElementById('city-search').value;
 

 







  //console.log(citySearch);




  //construct new request url- dynamic pull
// make the fetch call
  //console log data from fetch
  // traverse data 
  // display on page




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
