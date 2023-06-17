var express = require('express');
var router = express.Router();

var controller =  require('../controllers/registrarcontroller.js')

router.get('/', function(req, res, next) {
  res.render('registrar');
});

router.post(
  '/', 
  function(req, res){
    let DatosRegistrar = req.body;
    controller.Agregar(DatosRegistrar)
    .then((resultado)=>{
    res.render('registrar');
    })
    .catch((err)=>{
    res.send(err)
  })

});




module.exports = router;
