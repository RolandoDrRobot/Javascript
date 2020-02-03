// Anterior a ECMAScript 6
let lorem = 'We will try to make a break line \n'
+ 'This is the old way to do a break line in the console'

//ES6
let lorem2 = `Otra frase epica que necesitamos
con estas comillas francesas solo necesitamos dar el salto de linea`;

console.log(lorem);
console.log(lorem2);

/******************************************************************************/
/******************************************************************************/

// SpreadOperator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);
