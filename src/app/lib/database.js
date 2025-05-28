import {createConnection} from "mysql";

export async function addCotization({values = []}) {
    const connection = createConnection({
        host: process.env.db_server,
        user: process.env.db_user,
        password: process.env.db_pass,
        database: process.env.db,
    });

    connection.query("INSERT INTO COTIZACION (nombre, correo, telefono, empresa, plazo, activo, origen) VALUES (?, ?, ?, ?, ?, ?, 'SK Leasing')", values, function(error, results, fields){
        if(error){
            throw error;
        }
    });

    connection.end();
}