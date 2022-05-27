const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');


const app = express();
const PORT = process.env.PORT || 4000; //Configuramos puerto heroku

//Middleware
//app.use(morgan('dev'));
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//Routing
const router = require('./router.js');

//Ruta Raiz
app.get('/', (req, res) => {
    res.send('Express mañana PR05');
});

app.use('/', router);

// Iniciamos el server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
});