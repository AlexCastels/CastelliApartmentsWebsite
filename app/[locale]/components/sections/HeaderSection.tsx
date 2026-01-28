import ButtonComponent from "@/app/components/buttons/ButtonComponent";
import SocialLinksComponent from "@/app/components/socialLinks/SocialLinksComponent";
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
        <section id="header" className={`relative ${colorSchema.primaryBg}  flex items-center justify-center h-screen w-full shadow-xl`}>
            <Image
                src="/images/header.jpg"
                alt="Hero background"
                fill
                className="object-cover object-center z-0"
                priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="w-full pt-20 z-20">
                <div className="flex flex-col items-center justify-center">   
                    <p className={`${colorSchema.secondaryText} uppercase tracking-widest text-2xl text-center`}>{dictionary.headerSection.title}</p>
                    <Image 
                        className="invert brightness-0 saturate-0"
                        src={'/logo.png'} 
                        alt="Logo png" 
                        height={500} 
                        width={500}
                    />
                </div>
                <div className="container flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-0 w-full max-w-7xl mx-auto px-4">
                    <SocialLinksComponent colorSchema={colorSchema} socialLinks={propertyData.contacts.socialLinks} />
                    <ButtonComponent label={dictionary.headerSection.ctaLabel} url={propertyData.urlBedAndBreakfast}></ButtonComponent>
                </div>
            </div>
        </section>
    )
}