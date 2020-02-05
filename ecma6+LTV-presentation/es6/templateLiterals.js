/* Template Literals */

/* Multiline */

// The old way
var myMultiString = 'Some text that I want\nOn two lines!';
console.log(myMultiString);

// The ES6 way
var myMultiString= `This will be
on two lines!`;
console.log(myMultiString);

/*****************************************************************/
/*****************************************************************/

/* Expressions */

// in this case the vvalue of the variable name will be used in the expression
let name = `Ryan`;
console.log(`Hi my name is ${name}`);

// in this case the string 'Ryan' will be used in the expression
console.log(`Hi my name is ${'Ryan'}`);

// we can also do operations
let price = 19.99;
let tax = 1.13;
let total = `The total prices is ${price * tax}`;
console.log(total);

// we can aldo do this with a more complex object
let person = {
  firstName: `Ryan`,
  lastName: `Christiani`,
  sayName() {
      return `Hi my name is ${this.firstName} ${this.lastName}`;
  }
};
console.log(person.sayName());

/*****************************************************************/
/*****************************************************************/

/* HTML Templates */

data = {
  "id": 1,
  "name": "Bulbasaur",
  "base_experience": 64,
  "height": 7,
  "is_default": true,
  "order": 1,
  "weight": 69
}
function createMarkup(data) {
  return `
      <article class="pokemon">
          <h3>${data.name}</h3>
          <p>The Pokemon ${data.name} has a base experience of ${data.base_experience}, they also weigh ${data.weight}</p>
      </article>
  `
}
function fillHTML(){
  var newHtml = createMarkup(data);
  var body = document.getElementById('body');
  body.innerHTML = newHtml;
}
fillHTML();


