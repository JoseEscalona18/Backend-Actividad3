var RegistrarSQL = require('../src/RegistrarSQL.js')

class RegistrarController {

    Agregar(DatosRegistrar){
        return new Promise ((resolve, reject)=>{
            if (!DatosRegistrar.Nombre || !DatosRegistrar.Cedula || !DatosRegistrar.Correo || !DatosRegistrar.Usuario || !DatosRegistrar.Contrasena) {
                return resolve("Compruebe uno de los datos a ingresar");
            }
            console.log("asdajdshaj")
            RegistrarSQL.Agregar(DatosRegistrar)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
              reject(err)
            });
        })
    }

}

const ControladorRegistrar = new RegistrarController()

module.exports = ControladorRegistrar