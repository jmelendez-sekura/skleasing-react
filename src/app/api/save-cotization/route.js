import { NextResponse } from 'next/server';
import { addCotization } from "../../lib/database";

export async function POST(request){
    const formData = await request.formData();

    const nombre = formData.get("name");
    const empresa = formData.get("company");
    const correo = formData.get("email");
    const telefono = formData.get("tel");
    const activo = formData.get("active");
    const mensaje = formData.get("message");

    try{
        const results = await addCotization({values: {nombre, empresa, correo, telefono, activo, mensaje}});

        return NextResponse.json(results);
    }catch(error){
        return NextResponse.json({message: "Ocurrío un error", error: error, form: {nombre, empresa, correo, telefono, activo, mensaje}});
    }
}