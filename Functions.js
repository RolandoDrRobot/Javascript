var nombre = 'Rolando Arguello', edad = '25'

function imprimirEdad (n, e) {
	console.log ('${n} tiene ${e} anos')
}

imprimirEdad(nombre, edad)

imprimirEdad('Vicky', 28)

function imprimirNombreEnMayusculas(nombre) {
	nombre = nombre.toUpperCase()
	console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)
