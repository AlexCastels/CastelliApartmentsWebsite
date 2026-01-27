import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";
import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";
import { PropertyDataInterface } from "@/app/models/propertyData/propertyData.interface";
import Image from "next/image";

interface HeaderSectionProps {
    propertyData : PropertyDataInterface ;
    dictionary : DictionaryInterface ;
    colorSchema : ColorSchemaInterface ;
}

export default function HeaderSection({ propertyData , dictionary , colorSchema } : HeaderSectionProps ){
    return (
        <section id="headerSection" className={`${colorSchema.primaryBg} flex items-center justify-center h-[calc(100vh-112px)] w-full`}>
            <div className="flex flex-col items-center justify-center">   
                <p className={`${colorSchema.secondaryText} uppercase tracking-widest text-2xl text-center`}>{dictionary.headerSection.title}</p>
                <Image 
                    className="invert brightness-0 saturate-0 opacity-90"
                    src={'/logo.png'} 
                    alt="Logo png" 
                    height={500} 
                    width={500}
                />
            </div>
        </section>
    )
}