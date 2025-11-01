const fs = require('fs');//Para la copia de archivos
var express = require('express');
var router = express.Router();

var multer = require('multer')//Requerimos módulo multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/fotos/')
  },
filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage})

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
})
//metodo get para mostrar el formulario para subir fotos
router.get('/subirfoto', (req, res, next) => {
  res.render('subirfoto')
})

// metodo post para subir fotos desde el formulario
router.get('/subirfoto', upload.array('foto', 2), 
(req, res, next) => {
  var pagina = '<!doctype html><html><head></head><body>' +
  '<p>Se subieron las fotos</p>' +
  '<br><a href="/">Retornar</a></body></html>'
res.send(pagina)
})

//metodo get para ver las fotos
router.get('/verfotos', (req, res, next) => {
   fs.readdir('./public/fotos/', function (err, files) { 

    if (err) {
        console.error("Error al leer el directorio de fotos:", err);
        return res.status(500).send('Error al cargar las fotos.');
    }

    var pagina = '<!doctype html><html><head></head><body>'
    for (var x = 0; x < files.length; x++) {
      pagina += '<img src="fotos/' + files[x] + '"><br>'
  }
    pagina += '<br><a href="/">Retornar</a></body></html>'
    res.send(pagina)
  })
})

module.exports = router;
  