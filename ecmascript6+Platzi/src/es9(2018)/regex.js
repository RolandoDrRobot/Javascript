const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //Manejo de fechas por ano, mes y dias
//Revisar si los datos estan
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3]

console.log(year, month, day);

// Esto nos ayudara a trabajar los regex en grupos
