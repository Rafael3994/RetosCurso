let db = require('../dbRick');

RickModel = {};
//Defino las funciones que se ejecutaran en los endpoints
RickModel.findAll = () => db;

RickModel.findById = (id) => db.find(personaje => personaje.id == id);

RickModel.post = (newPersonaje) => {
    db.push(newPersonaje);
    return newPersonaje;
}

RickModel.update = (newPersonaje) => {
    let personajes = db.filter(personaje => personaje.id != newPersonaje.id);
    personajes.push(newPersonaje);
    db = personajes;
    return newPersonaje;
}

RickModel.delete = (id) => {
    let personajes = db.filter(personaje => personaje.id != id);
    db = personajes;
    return `Registro ${id} eliminado correctamente`;
}

RickModel.Alldelete = () => {
    db = [];
    return `Todos los Registros han eliminado correctamente`;
}


//Exporto la funcionalidad del modelo de datos
module.exports = RickModel;