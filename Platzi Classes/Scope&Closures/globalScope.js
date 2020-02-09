var hello = 'Hello';
let world = 'Hello world';
const helloWorld = 'Hello World!';

// Solo var puede volver a ser declarada
var hello = "PussyCat";
// let y const tiene que respetar su valir inicial en el AMBITO GLOBAL
let world = "This will not be overwritten, It will say this varuable cual already declared";
const helloWorld = "This either"

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}
anotherFunction();
// Todas las variable de arriba son variables globales

const helloWorld = () => {
  // Si se declara sin var ni let ni const, entonces se hace una variable de AMBITO GLOBAL
  // Puede ser accedida una vez se ejecute la funcion
  globalVar = 'I am global';
}
helloWorld();
console.log(globalVar);

const anotherFunction2 = () => {
  // var sera global solo dentro de este scope
  var localVar = globalVar = 'I am also global';
}
anotherFunction2();
console.log(globalVar);