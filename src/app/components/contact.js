import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock} from "@fortawesome/free-solid-svg-icons";
import CotizationForm from "./forms/cotizationForm";

export default function Contact(){

    return (
        <>
            <ToastContainer/>
            <div id="Contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col pt-28">
                <div className="text-center space-y-4 mb-16 ">
                    <h2 className="text-4xl md:text-5xl text-gray-900 font-bold text-center">Solicita tu <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cotización</span></h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">Nuestro equipo de expertos está listo para diseñar la solución de leasing perfecta para tu empresa. Contáctanos hoy mismo.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="rounded-lg bg-card text-card-foreground shadow-xl border-0">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos tu consulta</h3>
                                <CotizationForm/>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="rounded-lg bg-card text-card-foreground shadow-xl border-0">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Email</h4>
                                            <p className="text-gray-600">
                                                <Link href="mailto:contacto@skleasing.mx">contacto@skleasing.mx</Link>
                                            </p>
                                            <p className="text-gray-600">
                                                <Link href="mailto:ventas@skleasing.mx">ventas@skleasing.mx</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Teléfono</h4>
                                            <p className="text-gray-600">
                                                <Link href="tel:+525551234567">+52 (55) 5123-4567</Link>
                                            </p>
                                            <p className="text-gray-600">
                                                <Link href="tel:+525551234567">+52 (55) 5123-4568</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                            <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Oficinas</h4>
                                            <p className="text-gray-600">
                                                Av. Paseo de la Reforma 250
                                                <br/>
                                                Col. Juárez, Ciudad de México
                                                <br/>
                                                C.P. 06600
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                            <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Horarios</h4>
                                            <p className="text-gray-600">
                                                Lunes a Viernes: 9:00 - 18:00
                                                <br/>
                                                Sábados: 9:00 - 14:00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}