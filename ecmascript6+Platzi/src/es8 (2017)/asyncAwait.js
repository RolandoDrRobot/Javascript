// This is the Promise that we will use for the example
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    // OJO esto es un IF TERNARIO
    (true) 
    ? setTimeout(() => resolve('Hello Wolrd', 3000)) 
    : reject(new Error('Test Error'));
  });
}

// async deja saber que es una funcion asincrona
const helloAsync = async () => {
  //await means this process is asyncronus, send to the task list
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

// async Await function with try and catch
const anotherFunction = async () => {
  try{
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
  