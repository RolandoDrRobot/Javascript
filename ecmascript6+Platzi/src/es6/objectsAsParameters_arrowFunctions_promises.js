const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 },
]

//Parameter as Object
let listOfName = names.map(function(item){
  console.log(item.name);
});

/* Arrow functions */
// 1st type of Arrow function
let listOfNames2 = names.map( item => console.log(item.name));
// 2nd type of Arrow function with parameters
let listOfNames3 = (name, age, country) => {
  ...
}
// 3rd type of Arrow function, with ONLY one parameter
let listOfNames4 = name => {
  ...
}
// 4rd type with no Branckets
const square = num => num * num;

/******************************************************************************/
/******************************************************************************/

// Promises in ES6
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey!');
    }
    else {
      reject('Ups!');
    }
  });
}

//Here we can put al the then and catch that we want
helloPromise()
.then(response => console.log(response))
.then( () => console.log('Hola'))
.catch(error => console.log(error));