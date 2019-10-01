const multer = require ('multer');
const path = require ('path');
module.exports={
  //Como o multer vai armazena os arquivos que vai receber
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {//Vai usar o Date.now para mudar o nome do file e ser unico por usar tempo
      const ext = path.extname(file.originalname); //Vai recebre o nome original e o extname busca a extenção
      const name = path.basename(file.originalname, ext);//Vai pegar o nome e passar a ext por ultimo
      
      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};