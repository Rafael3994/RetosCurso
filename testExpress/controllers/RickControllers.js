//Importo modelo de datos
const Rickmodel = require('../models/RickModels');
const RickController = {};

RickController.getAll = (req, res) => {
    res.json(Rickmodel.findAll());
};

RickController.getById = (req, res) => {
    const id = req.params.id;
    res.json(Rickmodel.findById(id));
};

RickController.create = (req, res) => {
    const {id, name, status, species, gender, origin, image} = req.body;
    const personaje = {id, name, status, species, gender, origin, image};
    res.json(Rickmodel.post(personaje));
};

RickController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(Rickmodel.update({id, ...body}));
};

RickController.delete = (req, res) => {
    const {id} = req.params;
    res.json(Rickmodel.delete(id));
};

module.exports = RickController;