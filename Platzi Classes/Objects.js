function Persona(){
	console.log("Hola vida mia! Que rico Javascript!")
}

var sacha = new Persona()

function Clon(nombre, apellido){
	this.nombre = nombre
	this.apellido = apellido
	return this
}

var clonDeFabrica = new Clon('Sacha', 'Lifsyc')
