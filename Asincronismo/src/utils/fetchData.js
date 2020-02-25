let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// The URL_API comes independently
// the callback could be any function that needs this utility
const fetchData = (URL_API) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    // This 'true'as third parameter enables the asyncronus behavior
    xhttp.open('GET', URL_API, true);
    xhttp.onreadystatechange = ((event) => {
    // response state 4, means that It comes
    if (xhttp.readyState === 4) {
      // This is the famous TERNARY IF **********
      (xhttp.status === 200)
        ? resolve(JSON.parse(xhttp.responseText))
        : reject (new Error('Error' + URL_API))
      // This is the famous TERNARY IF **********
      }
    });
    xhttp.send();
  });  
}

module.exports = fetchData;