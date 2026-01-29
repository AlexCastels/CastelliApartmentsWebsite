"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface"

interface NavbarPropsInterface {
    links : {
        sectionId : string,
        text : string,
    }[] ,
    colorSchema : ColorSchemaInterface 
}

export default function Navbar( {links , colorSchema} : NavbarPropsInterface ){

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 z-50 w-full lg:h-28 flex items-center justify-between lg:px-4 transition-all duration-500
            ${scrolled ? "backdrop-blur-lg shadow-md border-b border-zinc-200/50" : "border-b border-zinc-200/50 bg-transparent"}
        `}>
            <Image className="object-fill lg:scale-125 h-20 w-24 lg:w-32 lg:h-28 invert brightness-0 saturate-0" height={500} width={500} src="/logo.png" alt="Logo png" />
            <div className="hidden lg:flex flex-1 items-center justify-center lg:gap-20 ">
                { links.map((link : any , index : number) => {
                    return (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <a className={`uppercase ${colorSchema.secondaryText} tracking-widest`} key={index}>{link.text}</a>
                            <div className={`w-0 h-px ${colorSchema.secondaryBg} group-hover:w-full transition-all duration-300`}></div>
                        </div>
                    )
                }) }
            </div>
            <div className="lg:hidden px-4">
                <Image className="invert brightness-0 saturate-0 h-10 w-10" src="/icons/menu.svg" alt="Hamburger menù icon" width={24} height={24}></Image>
            </div>
        </nav>
    )
}