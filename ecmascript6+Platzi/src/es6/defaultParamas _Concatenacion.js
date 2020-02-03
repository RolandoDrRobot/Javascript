
/* This is the old way to assign values to the paramenters */
function newFunction(name, age, country) {
  /* ( || ) returns the value of its second operand, if the first one is falsy, 
  otherwise the value of the first operand is returned */
    var name = name || 'oscar';
    var name = name || 'oscar';
    var name = name || 'oscar';
    console.log(name, age, country);
}
newFunction();


/* This is ES6 */
function newFunction2(name = 'Oscar', age = 32, country = 'MX') {
  console.log(name, age, country);
}
newFunction2();
newFunction2('Ricardo', '23', 'CO');

/******************************************************************************/
/******************************************************************************/

/* Concatenacion */
let hello = 'Hello';
let world = 'World';

/* This is the old way to concatenar */
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

/* This is the ES6 way */
let epicPhrase2 = `${hello}` `${world}`;
console.log(epicPhrase2);