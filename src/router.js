const express = require('express');
const multer = require ('multer');

const uploadConfig = require ('./config/upload');
const sessionController = require('./controllers/SessionController');
const localController = require ('./controllers/localController');
const profileController = require ('./controllers/profileController')
const resevaController = require ('./controllers/resevaController')

const routes = express.Router();
const upload = multer(uploadConfig);//Configurando multer


routes.post('/session', sessionController.store);
routes.get('/local',localController.index);
routes.post('/local',upload.single('thumbnail') ,localController.store);
routes.get('/profile', profileController.show);
routes.post('/locais/:local_id/resevas', resevaController.store)







module.exports = routes;