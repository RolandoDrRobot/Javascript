/*********************************/
/******** First Example ********/
/*******************************/
 const obj = {
   name: 'Oscar', 
   age: 32,
   country: 'MX',
 };

 // Destructurate the object obj, now we can use all the entries 
let { name, ...all } = obj;
console.log(all)

// If we want to print all the elments unless country you do this 
let { country, ...all } = obj;
console.log(all)

/*********************************/
/******** Second Example ********/
/*******************************/
const obj = {
  name: 'Oscar', 
  age: 32,
}
// Here we are going to annidate two objects
const obj1 = {
  ...obj, 
  country: 'MX'
}
console.log(obj1);