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

        const response = {
            success: true,
            result: results
        };

        return NextResponse.json(response);
    }catch(e){
        const error = {
            exception: e,
            code: e.errorCode,
            stackTrace: e.stack,
        };

        return NextResponse.json({success: false, message: "Ocurrío un error", error: error, form: {nombre, empresa, correo, telefono, activo, mensaje}, parameters: {url: process.env.DATABASE_URL, shadow: process.env.SHADOW_DATABASE_URL}});
    }
}