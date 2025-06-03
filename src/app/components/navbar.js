'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar({}){
    const [scroll, setScroll] = useState(false);
    const [height, setHeight] = useState("3.5rem");
    const [isCollapsed, setIsCollapsed] = useState(false);

    const stylesBlock = "flex flex-col items-end fixed top-0 inset-x-0 z-50 flex-none p-2 h-14 md:my-2 md:rounded-full border-0 md:border-1 border-solid border-gray-400 backdrop-blur-sm md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary md:shadow-sm md:bg-white/60 bg-white transition-all";
    const stylesBlur = "flex flex-col items-end fixed top-0 inset-x-0 z-50 flex-none p-2 h-14 md:my-2 md:rounded-full border-0 md:border-1 border-solid border-gray-400 backdrop-blur-md md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary shadow-xl bg-gray-100/80 transition-all";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        });
    });

    return (
        <nav style={{height: height, transformOrigin: "50% 0% 0px"}} className={scroll ? stylesBlur : stylesBlock}>
            <div className="flex gap-2 justify-between items-center w-full md:gap-px">
                <Link style={{width: "102.79px", height: "auto"}} href="#Header"><Image priority={true} className="pl-3 pr-1 h-7" src="/images/sk-leasing-sin-icono.png" alt="Logo de SK Leasing" width={102.79} height={28}/></Link>
                <div class="flex-1 md:hidden"></div>
                <Link href="/" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Nosotros</Link>
                <Link href="/" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Beneficios</Link>
                <Link href="#Contacto" target="_self" className="hidden select-none px-3 md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none hover:bg-black/5 border-transparent text-tertiary">Contáctanos</Link>
                <Link href="#Contacto" className="hidden select-none md:flex items-center font-medium transition-all py-1.5 rounded-full border flex-none px-3 bg-accent hover:bg-accent-hover border-transparent text-white ml-1.5 plausible-event-name=windows-waitlist">
                    Cotizar
                </Link>
                <Link href="#Contacto" className="select-none md:hidden flex items-center font-medium text-sm transition-all py-1.5 rounded-full border flex-none px-2 border-black/5 hover:bg-black/5 ml-1 plausible-event-name=windows-waitlist">Más información</Link>
                <MobileButton/>
            </div>
            <MobileMenu/>
        </nav>
    );

    function MobileButton(){
        function onClick(){
            setScroll(false);
            setHeight(isCollapsed ? "3.5rem" : "100vh");
            setIsCollapsed(isCollapsed ? false : true);
        }

        return (
            <button onClick={onClick} className="p-2 md:hidden transition-all"><FontAwesomeIcon icon={isCollapsed ? faXmark : faBars} className="size-6 transition-all text-[#1e6a9a]"/></button>
        );
    }

    function MobileMenu(){
        if(isCollapsed){
            return (
                <div className="flex flex-col flex-1 items-end px-4 py-4 w-full md:hidden">
                    <div style={{opacity: "1", transform: "none"}}>
                        <Link href="/" className="flex items-center px-2 py-3 -mr-2 text-5xl antialiased font-medium leading-none list-none rounded active:bg-black/5 text-tertiary hover:text-secondary">Nosotros</Link>
                    </div>
                    <div style={{opacity: "1", transform: "none"}}>
                        <Link href="/" className="flex items-center px-2 py-3 -mr-2 text-5xl antialiased font-medium leading-none list-none rounded active:bg-black/5 text-tertiary hover:text-secondary">Beneficios</Link>
                    </div>
                    <div className="flex flex-col flex-1 gap-8 justify-end pt-8 w-full">
                        <div className="grid grid-cols-2 gap-x-4 gap-8 pt-12 mx-auto w-full max-w-7xl text-left border-t md:grid-cols-5 text-secondary lg:mt-12">
                            <div className="flex flex-col gap-1 items-start col-span-2">
                                <div className="flex-1"></div>
                                <p className="text-tertiary">
                                    &copy; SK Leasing {new Date().getFullYear().toString()}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 items-start col-span-1">

                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (<></>);
        }
    }
}