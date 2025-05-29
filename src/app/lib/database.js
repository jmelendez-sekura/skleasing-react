import {createConnection} from "mysql";

export async function addCotization({values = []}) {
    const connection = createConnection({
        host: process.env.db_server,
        user: process.env.db_user,
        password: process.env.db_pass,
        database: process.env.db,
    });

    var aux = "Conectado con ID: " + connection.threadId.toString() + " ";

    const query = connection.query("INSERT INTO COTIZACION (nombre, correo, telefono, empresa, plazo, activo, origen) VALUES (?, ?, ?, ?, ?, ?, 'SK Leasing')", values);

    query.on("result", function(row){
        aux += row.toString();
    });

    query.on("error", function(error){
        aux += "Ocurrio un error: "+ error.message;
    });

    connection.end();

    return aux?.toString() ?? "Es null";
}