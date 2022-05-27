var express = require('express');
var router = express.Router();

let characters = [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "Earth",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      },
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      },
      {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin":"Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
      }
]

//ENDPOINTS CRUD-------------------------------------------------------------------------------
//Metodo GET - READ ALL
router.get('/', RickController.getAll);

//Metodo GET - READ por ID
router.get('/:id', RickController.getById);

//Metodo POST - CREATE
router.post('/', RickController.create);

//Metodo PUT - UPDATE
router.put('/:id', RickController.update);

//Metodo DELETE
router.delete('/:id', RickController.delete);


module.exports = router;