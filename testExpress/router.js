const MovieRouter = require('./views/MovieRouter');
const RickRouter = require('./views/RickRouter');
const router = require('express').Router();

//Rutas
router.use('/movies', MovieRouter);
router.use('/rick', RickRouter);

module.exports = router;