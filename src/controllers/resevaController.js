const Reseva = require ('../models/Reserva');

module.exports = {
  async store (req, res){
    const { user_id } = req.headers;
    const { local_id } = req.params;
    const { data } = req.body;

    const reseva = await Reseva.create({
      user:user_id,
      local:local_id,
      data
    })  
    //vai popular as informações, ou seja vai trazer todas as informações
    await reseva.populate('local').populate('user').execPopulate();
    
    return res.json(reseva)
  },
};