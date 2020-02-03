// Destructuracion
let person = {
  'name' : 'Oscar',
  'age' : '32',
  'country' : 'MX'
}
console.log(person.name, person.age);

// Ahora name, age y country tienen los valores del objeto, y pueden ser usados en el codigo
let { name, age, country } = person;
console.log(name, age, country);

/******************************************************************************/
/******************************************************************************/

// Let y Var, Basically out here nobody knows how is globalLet
{
  var globalVar = 'Gllbal Var';
}

{
  let globalLet = 'Global Let';
}

console.log(globalVar);
console.log(globalLet);

/******************************************************************************/
/******************************************************************************/

// const
const a = 'b';
a = 'a';
console.log(a);