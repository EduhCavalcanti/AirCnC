const express = require('express');
const routes = require('./router');
const mongoose = require('mongoose');
const cors = require ('cors');
const path = require ('path');

const app = express();

mongoose.connect("mongodb+srv://teste:teste@cluster0-0glwb.mongodb.net/ainb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); //Vai retornar arquivos estaticos.. Ex: Pdf, Img
app.use(routes);



app.listen('3333', () => {
  console.log('Server on');
});