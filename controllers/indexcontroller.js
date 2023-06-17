var FormularioSQL = require('../src/FormularioIndexSQL.js')

class FormularioIndexController {

    Agregar(DatosFormulario){
        return new Promise ((resolve, reject)=>{
            if (!DatosFormulario.Nombre || !DatosFormulario.Correo || !DatosFormulario.Equipo || !DatosFormulario.Mensaje) {
                return resolve("Compruebe uno de los datos a ingresar");
            }

            FormularioSQL.Agregar(DatosFormulario)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

}

const ControladorIndex = new FormularioIndexController()

module.exports = ControladorIndex