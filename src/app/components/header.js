import Link from "next/link";

export default function Header(){
    return (
        <div id="Header" className="flex flex-col h-screen md:bg-gradient-to-b from-white to-blue-300 items-center justify-center">
            <div>
                <h1 className="text-4xl md:text-6xl text-center px-5 md:px-36 font-bold text-gray-900">Arrendamiento puro <span className="text-gray-700">a la medida para tu</span> próximo proyecto</h1>
            </div>
            <div className="pt-10 px-14 md:w-2/6">
                <p className="text-xl md:text-2xl text-center text-gray-600">
                    Impulsa tu negocio sin descapitalizarte y con beneficios fiscales
                </p>
            </div>
            <div className="pt-10">
                <div className="flex flex-row gap-10">
                    <Link href="#Contacto" className="font-semibold text-white rounded-3xl bg-blue-500 px-16 md:px-12 py-2 transition-all hover:bg-blue-400">
                        Cotizar
                    </Link>
                    <Link href="#" className="hidden md:block font-semibold text-black rounded-3xl bg-white px-7 py-2 transition-all hover:bg-gray-300">
                        Más información
                    </Link>
                </div>
            </div>
        </div>
    );
}