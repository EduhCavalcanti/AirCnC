const mongoose = require('mongoose');

//A reseva é feita por um usuário e é uma reseva pra trabalhar no local
const ReservaSchema = new mongoose.Schema({ 
  data:String,
  approved:Boolean,
  user:{//Vai salva o usuário que criou o spot(Local)
    type: mongoose.Schema.Types.ObjectId,//vai gravar o Id do usuário, a referência do usuário que criou o spot
    ref:'User', //Ta fazendo referencia ao model User, ou seja um conexão com outro model
  },
  local:{ 
    type: mongoose.Schema.Types.ObjectId,
    ref:'Local', //Ta fazendo referencia ao model Local, ou seja um conexão com outro model
},
});

module.exports = new mongoose.model('reserva', ReservaSchema);