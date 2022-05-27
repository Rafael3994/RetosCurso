const express = require('express');
const router = express.Router();

//Importo modelo de datos
const RickController = require('../controllers/RickControllers');
// End-points CRUD movies

router.get('/', RickController.getAll);
router.get('/:id', RickController.getById);
router.post('/', RickController.create);
router.put('/:id', RickController.update);
router.delete('/:id', RickController.delete);

module.exports = router;