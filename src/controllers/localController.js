const locaModel = require ('../models/Local');
const User = require ('../models/User');

module.exports={
  async index (req,res){//Vai retornar uma listagem no mobile filtrada por tecnologia!
    const { tech } = req.query; //Vai pegar o parametro do query em que esta sendo passado a tecnologia
    
    const filterTech = await locaModel.find({techs:tech}); //vai filtrar e retornar a penas o que foi passado no query (Exempo foi passado React, o mongo vai pegar só o react na array)
  
    return res.json(filterTech);
  },
  async store (req, res){
    const { filename } = req.file; // Vou pegar só o nome do arquivo para salvar no bando de dados
    const { company, techs, price} = req.body;
    const { user_id } = req.headers; //Vai pegar o id do usuário que foi passado pelo header para saber que é ele que está criando o loca
    
    const user = await User.findById(user_id); // Vai passar o id para verificar se existe
    
    if(!user){
      return res.status(400).json({Message:'Usuário não existe' })//Se não existir vai da erro
    };
    
    const local = await locaModel.create({
      user:user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(',').map(tech => tech.trim()), //Tranformando em array, pq está em String, e retirando os espaços
    });
    
    return res.json(local);
  }
};