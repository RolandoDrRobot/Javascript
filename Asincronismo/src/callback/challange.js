let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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
