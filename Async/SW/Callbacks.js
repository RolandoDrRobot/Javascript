const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

const opts = { crossDomain: true }

function obtenerPersonajes(id, callbacks){
    const URL = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $.get(URL, opts, function(persona){
        console.log(`Hola, yo soy ${persona.name}`)

        if(callback){
            callback()
        }
    })
}

obtenerPersonajes(1, function (){
    obtenerPersonajes(2, function() {
        obtenerPersonajes(3, function () {
            obtenerPersonajes(4, function () {
                obtenerPersonajes(5, function () {
                    obtenerPersonajes(6)
                })
            })
        })
    })
})