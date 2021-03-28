
var searchBtn = document.getElementById('get-weather');
//searchBtn.addEventListener('click', getApi);


var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi(event) {
  event.preventDefault();
  // stops default click   {cityname} 'https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=7b56d24fc2a9f800b5f359ee3bc2a2f5';
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather';
  // using frequent console.log() to check function
  console.log('click');

  fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
     console.log(data)
  });
}  

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
 

 
//  ?q={city name}&appid=7b56d24fc2a9f800b5f359ee3bc2a2f5







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
