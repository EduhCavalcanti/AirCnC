const Local = require ('../models/Local')
module.exports= {//Vai ser a tela do perfil do user, vai exibir os lugares
  async show (req, res){
    const { user_id } = req.headers;

    const local = await Local.find({user: user_id});//Vai buscar todos os locais que o campo user é igual o user_id

    return res.json(local)
  },
};