const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) 
    ? setTimeOut(() => resolve('Hello World'), 3000) 
    : reject(new Error('Test Error'))
  });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
// Now we can add this finally to make sure It will be the last thinkg to be executed
.finally(() => console.log('Finalizo'));