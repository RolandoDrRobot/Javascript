let array = [1, 2, 3, [1, 2, 3 [1, 2, 3]]];
// flat nos permite aplastar la matriz, osea subirla los niveles que querramos
// en este case recibe dos, lo cual aplastara la matrz dos veces
console.log(array.flat(2));

// Nos permitira mapear y hacer algo con cada elemento del array
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));