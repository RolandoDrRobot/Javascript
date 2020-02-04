const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana', // Aqui desde ES7 se puede dejar esta coma
}

// This will transform the object with entry and value
const entries = Object.entries(data);
console.log(entries);
// lenght nos trae el numero de entradas
console.log(entries.length);

// This will transform the object into ONLY ONE ARRAY WITH THE VALUES
const entries = Object.values(data);
console.log(values);