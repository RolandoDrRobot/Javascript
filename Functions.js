//Declaracion de variable y objetos a usar

var nombre = 'Rolando Arguello', edad = '25'

var dario = {
	nombre: 'Dario',
	apellido: 'Sunisky',
	edad: 27
}

var rolo  = {
        nombre: 'Rolo',
        apellido: 'Arguello',
        edad: 25
}

//Declaracion de funciones 

function imprimirEdad (n, e) {
	console.log ('${n} tiene ${e} anos')
}

function imprimirNombreEnMayusculas(nombre) {
        nombre = nombre.toUpperCase()
        console.log(nombre)
}

function imprimirNombreOjetos({ nombre }) { 
	console.log(nombre.toUpperCase())
}

//Start de las funciones

imprimirEdad(nombre, edad)

imprimirEdad('Vicky', 28)

imprimirNombreEnMayusculas(nombre)

imprimirNombreOjetos(rolo)
