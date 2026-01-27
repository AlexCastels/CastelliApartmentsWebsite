import Image from "next/image"
import { colorSchema } from "@/app/style/color-schema"
import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface"

interface NavbarPropsInterface {
    links : any ,
    colorSchema : ColorSchemaInterface 
}

export default function Navbar( {links , colorSchema} : NavbarPropsInterface ){
    return (
        <nav className="w-full h-28 bg-transparent flex item-center justify-between px-4">
            <Image className="object-fill lg:scale-125 w-30 invert brightness-0 saturate-0" height={500} width={500} src="/logo.png" alt="Logo png" />
            <div className="flex flex-1 items-center justify-center gap-20 ">
                { links.map((link : any , index : number) => {
                    return (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <a className={`uppercase ${colorSchema.secondaryText} tracking-widest`} key={index}>{link.text}</a>
                            <div className={`w-0 h-px ${colorSchema.secondaryBg} group-hover:w-full transition-all duration-300`}></div>
                        </div>
                    )
                }) }
            </div>
        </nav>
    )
}