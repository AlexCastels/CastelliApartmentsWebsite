import { PropertyDataInterface } from "@/app/models/propertyData/propertyData.interface";

interface HeaderSectionProps {
    propertyData : PropertyDataInterface ;
    dictionary : any ;
}

export default function HeaderSection({ propertyData , dictionary } : HeaderSectionProps ){
    return (
        <section id="headerSection" className="bg-gray-600 h-screen w-full">
            <p className="text-gray-800">{propertyData.lang}</p>
        </section>
    )
}