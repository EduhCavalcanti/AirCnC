const mongoose = require ('mongoose');

const localSchema = new mongoose.Schema({
  //Imagem em português rsrs
  thumbnail: String,
  company: String,
  price: Number,
  //tecnologias em PT-Br rsrs
  techs:[String], //Array de Strings
  
  user:{//Vai salva o usuário que criou o spot(Local)
    type: mongoose.Schema.Types.ObjectId,//vai gravar o Id do usuário, a referência do usuário que criou o spot
    ref:'User', //Ta fazendo referencia ao model User, ou seja um conexão com outro model
  },
}, {
  toJSON:{
    virtuals:true,//Vai calcular os "virtuals junto com o schema"
  }
});
//Vai retornar a foto na URL
localSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = new mongoose.model('Local', localSchema);
