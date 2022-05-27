var express = require('express');
const MovieController = require('../controllers/MovieController');
var router = express.Router();

// const morgan = require('morgan');
// const app = express();

//Add datos de prueba
let movies = [
    {id:1, title: "Soy Leyenda"},
    {id:2, title: "El Risas"},
    {id:3, title: "Yo Robot"},
    {id:4, title: "El Hoyo"}
];


//ENDPOINTS CRUD-------------------------------------------------------------------------------
//Metodo GET - READ ALL
router.get('/', MovieController.getAll);

//Metodo GET - READ por ID
router.get('/:id', MovieController.getById);

router.get('/titulo/:title', MovieController.getByTitle);

//Metodo POST - CREATE
router.post('/', MovieController.create);

//Metodo PUT - UPDATE
router.put('/:id', MovieController.update);

//Metodo DELETE
router.delete('/:id', MovieController.delete);

module.exports = router;
