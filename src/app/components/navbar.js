import Image from 'next/image'
import Link from 'next/link'

export default function NavBar({}){

    return (
        <nav className="flex flex-col items-end fixed top-0 inset-x-0 z-50 flex-none p-2 h-14 md:my-2 md:rounded-full border-2 border-solid border-gray-400 md:border-0.5 backdrop-blur-lg md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary shadow-xl bg-white">
            <div className="flex gap-2 justify-between items-center w-full md:gap-px">
                <Link href="#"><Image priority={true} sizes="(max-width: 768px) 500px, 500px" className="px-3 w-28 " src="./images/SK-Leasing-logo.png" alt="Logo de SK Leasing" width={500} height={119}/></Link>
                <Link href="#" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Nosotros</Link>
                <Link href="#" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Beneficios</Link>
                <Link href="#" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Contáctanos</Link>
                <button data-tally-open="mOyxaR" data-tally-layout="modal" data-tally-width="500" data-tally-auto-close="0" className="select-none flex items-center font-medium transition-all py-1.5 rounded-full border flex-none px-3 bg-accent hover:bg-accent-hover border-transparent text-white ml-1.5 plausible-event-name=windows-waitlist">
                    <Link href="#">Cotizar</Link>
                </button>
            </div>
        </nav>
    );
}