var weatherContainer = document.getElementById('weather');
var historyContainer = document.getElementById('history');
var searchButton = document.getElementById('search-button');
var fiveDayContainer = document.getElementById('five-day-container');

var apiKey = ' 7b56d24fc2a9f800b5f359ee3bc2a2f5';

function searchApi(event) {
  event.preventDefault();
  var searchValue1 = document.getElementById('search-value').value;
  getApi(searchValue1);
  getFiveDay(searchValue1);
}

function getApi(searchValue) {
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=imperial`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      $('#search-value').val('');

      var temp = document.createElement('span');
      temp.textContent = 'Temperature: '+ data.main.temp + 'F';

      
    })
}




// var getRepoName = function () {
//   // This is coming from the URL search bar in the browser. It is what comes after the `?`.
//   var queryString = document.location.search;
//   var repoName = queryString.split('=')[1];

//   if (repoName) {
//     repoNameEl.textContent = repoName;

//     getRepoIssues(repoName);
//   } else {
//     // This will run and return to the homepage if there was nothing in the URL query parameter.
//     document.location.replace('./index.html');
//   }
// };

// var getRepoIssues = function (repo) {
//   var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayIssues(data);

//         // Since GitHub only returns 30 results at a time, we check to see if there's more than 30 by looking for a next page URL in the response headers.
//         if (response.headers.get('Link')) {
//           displayWarning(repo);
//         }
//       });
//     } else {
//       document.location.replace('./index.html');
//     }
//   });
// };

// var displayIssues = function (issues) {
//   // This will check for strict equality. Using `!issues.length` works, but only because JavaScript considers `0` to be `falsy`.
//   if (issues.length === 0) {
//     issueContainerEl.textContent = 'This repo has no open issues!';
//     return;
//   }

//   for (var i = 0; i < issues.length; i++) {
//     var issueEl = document.createElement('a');
//     issueEl.classList = 'list-item flex-row justify-space-between align-center';
//     issueEl.setAttribute('href', issues[i].html_url);
//     issueEl.setAttribute('target', '_blank');

//     var titleEl = document.createElement('span');
//     titleEl.textContent = issues[i].title;
//     issueEl.appendChild(titleEl);

//     var typeEl = document.createElement('span');

//     // If there's already a pull request open, it's a good idea we focus on other open issues that no one has worked on.
//     if (issues[i].pull_request) {
//       typeEl.textContent = '(Pull request)';
//     } else {
//       typeEl.textContent = '(Issue)';
//     }

//     issueEl.appendChild(typeEl);

//     issueContainerEl.appendChild(issueEl);
//   }
// };

// // When there are more issues than what GitHub has returned, we let the user know by printing a message with a link to the page.
// var displayWarning = function (repo) {
//   limitWarningEl.textContent = 'To see more than 30 issues, visit ';

//   var linkEl = document.createElement('a');
//   linkEl.textContent = 'GitHub.com';
//   linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
//   linkEl.setAttribute('target', '_blank');

//   // This will appear on the bottom of the page.
//   limitWarningEl.appendChild(linkEl);
// };

// getRepoName();


// // //let cityArray = [];
// // //searchBtn.addEventListener('click', getApi);

// // let formSubmitHandler = function (event) {
// //   event.preventDefault();
// // };


// // //loCALSTORAGE SET- set
// // //localStorage get- load on page


// // function getApi(event) {
// //   event.preventDefault();

// //   //let searchValue = document.getElementById('search-city').value;
// //   let searchValue = document.getElementById('search-city').value;

// //   console.log(searchValue)
// //   let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=imperial`;
  
// //   // repeat api fetch
// //   fetch(weatherUrl)
// //     .then(function (response) {
// //       return response.json()
// //     })

// //     .then(function (data) {
// //         console.log(data)
// //         document.querySelector('#search-city').value = "";
        
// //         // let currentDate = document.createElement('div');
// //         // currentDate.textContent = " (" + moment(data.value).calendar("MMM D, YYYY") + ") ";

// //         // var weatherIcon= data.weather[0].icon;

// //         // weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

// //         console.log('humidity:' + data.main.humidity + '%'); 
// //         console.log('weather:' + data.main.temp + 'F'); 
// //         console.log('name:', data.name)
// //       //Needs separate div
      
// //         document.querySelector('.results').textContent = data.main.temp;

// //       });

// //       let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${apiKey}&units=imperial`;
    
// //       fetch(forecastUrl)
// //       .then(function (response) {
// //         return response.json()
// //       })

// //       .then(function (data) {
// //           console.log(data)
// //           document.querySelector('#search-city').value = "";
// //           // $('#search-city').val('')
// //         });

// // }

    
// //   //Needs separate div
// //   //document.querySelector('.results').textContent = data.main.humidity;

// //   searchButton.addEventListener('click', getApi);


// //   //data.weather[0].icon;

  

// //   //var = data.weather[0].icon;

// //   // weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);




// // //let cityname = searchCity.value();

// //   //   getCityNames (cityname) ;
// //   //   searchCity.textContent = '';
// //   //   nameInputEl.Value = '';
// //   // } else {
// //   //     alert('Please select a city.');
// //   // }



// //   // let temp = document.createElement('div');
// //   // temp.textContent = "Temp: " + DataTransfer.main.temp + "F";
// //   // temp.classList = "list-group";

// //   // let cityEl = document.createElement('h3');
// //   // cityEl.textContent = data.name;

// //   // let humidity = document.createElement('div');
// //   // humidity.textContent = "Humidity: " + data.main.humidity + "% ";
// //   // humidity.classList = "list-group";



// //   // let weatherIcon = document.createElement('img');
// //   // weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
// //   // cityEl.appendChild(weatherIcon);




// //   // let currentDate = document.createElement('div');
// //   // currentDate.textContent = " (" + moment(data.value).calendar("MMM D, YYYY") + ") ";
// //   // cityEl.append(currentDate);







// //   // function savedCities(searchedCity) {
// //   //   cityArray.push(citySearch)
// //   //   console.log('city array variable: ', cityArray);
// //   //   localStorage.setItem('cities', JSON.stringify(cityArray));

//   // }

//   // function citySearchSubmit(event) {
//   //   event.preventDefault();
//   //   let citySearch = document.querySelector('#citySearch').value;
//   //   if (!citySearch) {
//   //     console.error('Please select a city');
//   //     return;
//   //   }

//   //   savedCities(citySearch)
//   //   let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=imperial`;

//   //   // fetch(requestUrl)
//   //   //   .then(function (response) {
//   //   //     return response.json()
//   //   //   })

//   //     .then(function (currentData) {
//   //       console.log(currentData)
//   //       let currentCity = document.querySelector('#selectedCity');
//   //       let currentDayWeather = document.querySelector('#current-dayweather');
//   //     })
//   // }


//   // function getApi(event) {
//   //   event.preventDefault();
//   //   // stops default click   
//   //   var requestUrl = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={apiKey}';
//   //   // using frequent console.log() to check function
//   //   console.log('click');

//   //   fetch(requestUrl)
//   //    .then(function (response) {
//   //      return response.json();
//   //    })
//   //    .then(function (data) {
//   //      console.log(data)
//   //   });
//   // }  

//   //   fetch(requestUrl)
//   //     .then(function (response) {
//   //       return response.json();
//   //     })
//   //     .then(function (data) {
//   //       for (var i = 0; i < data.length; i++) {
//   //         var listItem = document.createElement('li');
//   //         listItem.textContent = data[i].html_url;
//   //         repoList.appendChild(listItem);
//   //       }
//   //     });
//   // }
//   //5 day weather fetch function.
//   // function getFiveDay(event) {
//   //   event.preventDefault();
//   //   fetch(fiveDayUrl)
//   //       .then(function (response) {
//   //           return response.json();
//   //       })
//   //       .then(function (data) {
//   //           console.log(data)