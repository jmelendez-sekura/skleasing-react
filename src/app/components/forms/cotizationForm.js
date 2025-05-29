'use client'

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendCotization } from "@/app/api/action";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialState = {
    data: {
        name: "",
        company: "",
        email: "",
        tel: "",
        active: "",
        message: ""
    },
    success: false,
    errors: {
        name: "",
        company: "",
        email: "",
        tel: "",
        active: "",
        message: ""
    }
};

export default function CotizationForm(){
    const [state, formAction] = useActionState(sendCotization, initialState);

    console.log(process.env.NODE_ENV);

    return (
        <form action={formAction} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                    <input defaultValue={state.data?.name || undefined} type="text" name="name" id="name" placeholder="Tu nombre completo" className={`flex w-full rounded-md border ${state.errors?.name ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12`} />
                    {state.errors?.name && (<p className="text-red-500 text-xs pt-1">{state.errors.name}</p>)}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                    <input id="company" defaultValue={state.data?.company || undefined} type="text" name="company" placeholder="Nombre de tu empresa" className={`flex w-full rounded-md border ${state.errors?.company ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12`} />
                    {state.errors?.company && (<p className="text-red-500 text-xs pt-1">{state.errors.company}</p>)}
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input id="email" defaultValue={state.data?.email || undefined} type="email" name="email" placeholder="tu@email.com" className={`flex w-full rounded-md border ${state.errors?.email ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12`}/>
                    {state.errors?.email && (<p className="text-red-500 text-xs pt-1">{state.errors.email}</p>)}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input id="tel" defaultValue={state.data?.tel || undefined} type="text" name="tel" placeholder="+52 (55) 1234-5678" className={`flex w-full rounded-md border ${state.errors?.tel ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12`}/>
                    {state.errors?.tel && (<p className="text-red-500 text-xs pt-1">{state.errors.tel}</p>)}
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Activo</label>
                <input id="active" defaultValue={state.data?.active || undefined} type="text" name="active" placeholder="Ej: Maquinaria industrial, vehículos, equipos médicos..." className={`flex w-full rounded-md border ${state.errors?.active ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12`} />
                {state.errors?.active && (<p className="text-red-500 text-xs pt-1">{state.errors.active}</p>)}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea id="message" defaultValue={state.data?.message || undefined} name="message" placeholder="Cuéntanos sobre tu proyecto y necesidades específicas..." className={`flex w-full rounded-md border ${state.errors?.message ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-32`}/>
                {state.errors?.message && (<p className="text-red-500 text-xs pt-1">{state.errors.message}</p>)}
            </div>
            <SubmitButton/>
        </form>
    );

    function SubmitButton(){
        const {pending} = useFormStatus();

        return (
            <button disabled={pending ? true : false} style={{cursor: pending ? "not-allowed" : "pointer"}} type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 px-4 py-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 text-lg font-semibold">{pending ? (<span>Enviando... <FontAwesomeIcon className="animate-spin" icon={faSpinner}/> </span>) : "Enviar Solicitud"}</button>
        );
    }
}