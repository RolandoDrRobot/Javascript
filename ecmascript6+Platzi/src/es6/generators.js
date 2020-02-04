/* Generator */
function* helloworld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  } 
};

const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);