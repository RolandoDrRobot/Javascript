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