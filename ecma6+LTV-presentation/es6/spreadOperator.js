/* Spread Operator */

// Copying an array
let fruits = ['Apple','Orange','Banana'];
let newFruitArray = [...fruits];
console.log(newFruitArray); // ['Apple','Orange','Banana']

// Concatenating arrays
let arr1 = ['A', 'B', 'C'];
let arr2 = ['X', 'Y', 'Z'];
let result = [...arr1, ...arr2];
console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

// Spread syntax for object literals
var obj1 = { id: 101, name: 'Jhon Doe' };
var obj2 = { age: 25, country: 'USA'};
const employee = { ...obj1, ...obj2 };
console.log(employee); //{ "id": 101, "name": "Jhon Doe", "age": 25, "country": "USA" }
// What happens if we try to spread an onject an array
/*
var obj1 = { id: 101, name: 'Jhon Doe' };
var obj2 = [ ['age', 25], ['country', 'USA'] ];
const employee = { ...obj1, ...obj2 };
console.log(employee);
*/

// Spreading elements on function calls
let fruits = ['Apple','Orange','Banana'];

var getFruits = (f1, f2, f3) => {
  console.log(`Fruits: ${f1}, ${f2} and ${f3}`); 
}

getFruits(...fruits); // Fruits: Apple, Orange and Banana



// Separate Charts, ONLY strings, no numbers
var alphabets = ["A", ..."123124", "E"];
console.log(alphabets);
// What is the ouput expected?
var max = Math.max(..."43210");
console.log(max);
