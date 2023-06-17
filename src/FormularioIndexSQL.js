const mysql = require('mysql');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class FormularioSQL {

    Agregar(DatosFormulario){
        let nombre = '"'+DatosFormulario.Nombre+'"'
        let correo = '"'+DatosFormulario.Correo+'"'
        let Equipo = '"'+DatosFormulario.Equipo+'"'
        let Mensaje = '"'+DatosFormulario.Mensaje+'"'


        return new Promise((resolve, reject) => {

            conection.query('INSERT INTO servicioreparacion (Nombre, Correo, Equipo, Mensaje) VALUES (' +nombre+ ', ' +correo+ ', ' +Equipo+ ', ' +Mensaje+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                resolve(DatosFormulario)
            }
        );
        })
    }
}

const ClaseFormulario = new FormularioSQL();
module.exports = ClaseFormulario; 

