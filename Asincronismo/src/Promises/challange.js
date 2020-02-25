const fetchData = require('../utils/fetchData');
let API = 'https://rickandmorty.com/api/character/';

// Here we chain promise with a then, in this way, 
// It needs to wait until is the promise is resolve to go to then
fetchData(API)
.then(data => {
  console.log(data.info.count);
  return fetchData(`${API}${data.results[0].id}`);
})
.then(data => {
  console.log(data.name);
  return fetchData(data.origin.url);
})
.then(data => {
  console.log(data.dimension)
})
// Here is my simple to catch the error
.catch(err => console.error(err));
