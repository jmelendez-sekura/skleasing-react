import Image from 'next/image'
import Link from 'next/link'
export default function NavBar({}){

    return (
        <nav style={{height: "3.5rem", transformOrigin: "50% 0% 0px"}} className="flex flex-col items-end fixed top-0 inset-x-0 z-50 flex-none p-2 h-14 md:my-2 md:rounded-full border-0 md:border-1 border-solid border-gray-400 backdrop-blur-sm md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary md:shadow-sm md:bg-white/60 bg-white">
            <div className="flex gap-2 justify-between items-center w-full md:gap-px">
                <Link style={{width: "102.79px"}} href="#Header"><Image priority={true} className="pl-3 pr-1 h-7" src="/images/sk-leasing-sin-icono.png" alt="Logo de SK Leasing" width={102.79} height={28}/></Link>
                <Link href="/" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Nosotros</Link>
                <Link href="/" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Beneficios</Link>
                <Link href="#Contacto" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Contáctanos</Link>
                <Link href="#Contacto" className="select-none flex items-center font-medium transition-all py-1.5 rounded-full border flex-none px-3 bg-accent hover:bg-accent-hover border-transparent text-white ml-1.5 plausible-event-name=windows-waitlist">
                    Cotizar
                </Link>
            </div>
        </nav>
    );
}