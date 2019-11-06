const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"

const opts = { crossDomain: true }

const onPeopleResponse = function(persona){
    console.log(`Hola soy ${persona.name}`)
    console.log(i)
}
for(i=1; i<=10; i++){
    var people_URL = `${API_URL}${PEOPLE_URL.replace(':id', i)}`
    //3 PARAMETROS
    //la url de donde viene el objeto
    //definimos que la fuente es ajena
    //funcion a ejecutar cuando la repuesta del get venga
    $.get(people_URL, opts, onPeopleResponse)
}
