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
};


//loCALSTORAGE SET- set
//localStorage get- load on page


function getApi(event) {
  event.preventDefault();

  let searchValue = document.getElementById('search-city').value;

  console.log(searchValue)
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=imperial`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${apiKey}&units=imperial`;
  // repeat api fetch
  fetch(weatherUrl)
    .then(function (response) {
      return response.json()
    })

    .then(function (data) {
        console.log(data)
        document.querySelector('#search-city').value = "";
        // $('#search-city').val('')
      });
      console.log('humidity:', data.main.humidity); 
      console.log('weather:', data.main.temp); 
      console.log('name:', data.name)
      //Needs separate div
      //document.querySelector('.results').textContent = data.main.humidity;
      document.querySelector('.results').textContent = data.main.temp;


      fetch(forecastUrl)
      .then(function (response) {
        return response.json()
      })

      .then(function (data) {
          console.log(data)
          document.querySelector('#search-city').value = "";
          // $('#search-city').val('')
        });

}

    
  //Needs separate div
  //document.querySelector('.results').textContent = data.main.humidity;

  searchButton.addEventListener('click', getApi);


  //data.weather[0].icon;
  //let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${apiKey}&units=imperial`;

  //var = data.weather[0].icon;

  // weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

//let cityname = searchCity.value();

  // if (cityname) {
  //   getCityNames (cityname) ;
  //   searchCity.textContent = '';
  //   nameInputEl.Value = '';
  // } else {
  //     alert('Please select a city.');
  // }



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
  // cityEl.appendChild(weatherIcon);




  // let currentDate = document.createElement('div');
  // currentDate.textContent = " (" + moment(data.value).calendar("MMM D, YYYY") + ") ";
  // cityEl.append(currentDate);







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