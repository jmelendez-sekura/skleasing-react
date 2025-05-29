import {createConnection} from "mysql";

export async function addCotization({values = []}) {
    const connection = createConnection({
        host: process.env.db_server,
        user: process.env.db_user,
        password: process.env.db_pass,
        database: process.env.db,
    });

    var aux;

    connection.query("INSERT INTO COTIZACION (nombre, correo, telefono, empresa, plazo, activo, origen) VALUES (?, ?, ?, ?, ?, ?, 'SK Leasing')", values, function(error, results, fields){
        if(error){
            aux =  error.message;
        }else{
            aux = results;
        }
    });

    connection.end();

    return aux;
}