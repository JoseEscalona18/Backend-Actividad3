const mysql = require('mysql');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class RegistrarSQL {

    Agregar(DatosRegistrar){
        let nombre = '"'+DatosRegistrar.Nombre+'"'
        let Cedula = Number(DatosRegistrar.Cedula)
        let Correo = '"'+DatosRegistrar.Correo+'"'
        let Usuario = '"'+DatosRegistrar.Usuario+'"'
        let Contrasena = '"'+DatosRegistrar.Contrasena+'"'


        return new Promise((resolve, reject) => {

            conection.query('INSERT INTO clientes (NombreCliente, CedulaCliente, Correo, Usuario, Contrasena) VALUES (' +nombre+ ', ' +Cedula+ ', ' +Correo+ ', ' +Usuario+ ', ' + Contrasena + ');',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                resolve(DatosRegistrar)
            }
        );
        })
    }
}

const ClaseRegistrar = new RegistrarSQL();
module.exports = ClaseRegistrar; 

