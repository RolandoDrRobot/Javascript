var scope = "i am global";

const functionScope = () => {
  // este var es global pero dentro de esta function 
  var scope = "i am just local";
  const func = () => {
    // Cuando se hace este return si se ejecuta la funcion
    // A quien se referira como scope afuera va a ser este scope
    return scope;
  };
  // Aqui se ejecuta el return que hace que varibable local sea global
  console.log(func());
};

functionScope();
console.log(scope); 