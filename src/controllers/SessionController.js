const UserModel = require('../models/User')

module.exports = {
  //*Login do Usuário
  async store(req, res) {
    const { email } = req.body

    const userExists = await UserModel.exists({ email });
    if (userExists) {
      return res.status(400).json({ message: "Usuário já cadastrado" })
    }

    const user = await UserModel.create(req.body);
    return res.json(user);
  },
};