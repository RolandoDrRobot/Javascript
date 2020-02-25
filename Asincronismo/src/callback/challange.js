let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmorty.com/api/character/';

// The URL_API comes independently
// the callback could be any function that needs this utility
function fetchData(URL_API, callback) {
  let xhttp = new XMLHttpRequest();
  // This 'true'as third parameter enables the asyncronus behavior
  xhttp.open('GET', URL_API, true);
  xhttp.onreadystatechange = function (event) {
    // response state 4, means that It comes
    if (xhttp.readyState === 4) {
      // status 200 means OK
      if (xhttp.status === 200) {
        // We need to parse JSON, cause the response comes as String
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // We create and error object "for this else"
        const ERROR = new Error('Error' + URL_API);
        return callback(ERROR, null);
      }
    }
  }
  xhttp.send();
}

// Here we need to check the 'IF' the call fail
// Until the end we will start doing the console log or the excution 
// Of all the data that we collected thru the callbacks
fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API, + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  })
});