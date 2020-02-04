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