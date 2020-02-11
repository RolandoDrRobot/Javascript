const anotherFunction = () => {
  // si aqui inicilizamos i con var, va a utilizar el ultimo valor que va a tomar i
  // si iniciamos con let va a declarar i dentro del scope de las funcion, en este caso del loop
  for(let i; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};
anotherFunction();