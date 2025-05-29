'use server'

import {z} from "zod";

const cotizationFormSchema = z.object({
    name: z.string().nonempty({message: "El nombre no puede quedar vacio"}).trim(),
    company: z.string().nonempty({message: "Por favor, indicanos tu compañia"}).trim(),
    email: z.string().email({message: "Ingresa un correo válido"}).trim(),
    tel: z.string().min(10, {message: "Ingresa un número de teléfono válido"}).trim(),
    active: z.string().nonempty({message: "El activo no puede quedar vacio"}).trim(),
    message: z.string().nonempty({message: "Por favor, cuéntanos sobre tu proyecto"}).trim()
});

export async function sendCotization(prevState, formData){
    const data = Object.fromEntries(formData);
    const validationResult = cotizationFormSchema.safeParse(data);

    if(!validationResult.success){
        const fieldErrors = validationResult.error.flatten().fieldErrors;

        return {
            data: data,
            errors: {
                name: fieldErrors.name,
                company: fieldErrors.company,
                email: fieldErrors.email,
                tel: fieldErrors.tel,
                active: fieldErrors.active,
                message: fieldErrors.message
            }
        };
    }

    const url = (process.env.NODE_ENV === "development") ? "http://localhost:3000/api/save-cotization" : "https://skleasing-react-git-main-jmelendez-sekuras-projects.vercel.app/api/save-cotization";

    const response = await fetch(url, {
        method: "POST",
        body: formData,
    });

    return {
        success: true
    };
}