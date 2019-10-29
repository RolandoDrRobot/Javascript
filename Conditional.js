var sacha = {
	nombre: 'Sacha',
	apellido: 'Lifszyc',
	edad: '28',
	ingeniero: 'true',
	cocinero: false,
	cantante: 'false,
	dj: false,
	drone: true
}

function imprimirProfesiones(persona) {
	console.log (${persona.nombre} es:')

	if (persona.ingeniero) {
		console.log('Ingeniero')
	}	
}
