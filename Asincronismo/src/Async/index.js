// Here we are combining with a promise because
// We want to create the time effect 
// The wait effect
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do something Async'), 3000)
      : reject(new Error('Test Error'))
  });
}

const doSomething = async ()=> {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


// Here we can implement a try and catch
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch(error) {
    console.error(error);
  }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
