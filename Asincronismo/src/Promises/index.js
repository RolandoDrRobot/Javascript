// Promise
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whooops!');
    }
  });
};

somethingWillHappen() // You can break the line when you use the .
  .then(response => console.log(response))
  .catch(err => console.log(err));

  const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          resolve('True');
        }, 2000);
      } else {
        // If we create the object error It will show you more information
        // It will show you the trace
        const error = new Error('Whoop!');
        reject('error!');
      }
    });
  };

  somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));

// This function of promise eill return the values of the promises in a array
Promise.all([somethingWillHappen()],[somethingWillHappen2()])
.then(response => {
  console.log('Array of results', response)
})
.catch(err => {
  console.error(err);
});
