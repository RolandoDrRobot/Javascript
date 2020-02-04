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

// This is a good example of Promise
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    // OJO esto es un IF TERNARIO
    (true) 
    ? setTimeout(() => resolve('Hello Wolrd', 3000)) 
    : reject(new Error('Test Error'));
  });
}