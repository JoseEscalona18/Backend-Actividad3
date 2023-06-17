var express = require('express');
var router = express.Router();

var controller =  require('../controllers/indexcontroller.js')

router.post(
    '/', 

    function(req, res){
        let DatosFormulario = req.body;
        controller.Agregar(DatosFormulario)
        .then((resultado)=>{
        res.render('index');
        })
        .catch((err)=>{
        res.send(err)
    })

});

router.get(
  '/',
  function(req, res) { 
    controller.ListarDestacados()
    .then((resultado)=>{
      res.render('index', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
  });



module.exports = router;
