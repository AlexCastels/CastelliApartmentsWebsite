import ButtonComponent from "@/app/components/buttons/ButtonComponent";
import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";
import Image from "next/image";

interface CardPropsInterface {
    accomodation: {
        id: number,
        name: string,
        description: string,
        numberOfPeople : number,
        CIR: number,
        CIN: number,
        images: {
            url: string,
            width: number,
            height: number,
            description: string
        }[],
        cta : string
    } ;
    colorSchema : ColorSchemaInterface ;
}

export default function Card({accomodation , colorSchema} : CardPropsInterface){
    return (
        <div className="flex flex-col gap-2">
            <div className={`${colorSchema.primaryText} h-96 w-80 border border-zinc-100`}>
                <Image className="h-50 object-fill shadow-2xl"
                    alt="Accomodation image" 
                    src={accomodation.images[0].url} 
                    height={accomodation.images[0].height} 
                    width={accomodation.images[0].width}
                />
                <div className={`p-4 ${colorSchema.secondaryText}`}>
                    <p className="uppercase text-xl">{accomodation.name}</p>
                </div>
            </div>
            <div className="justify-items-end">
                <button className={`${colorSchema.secondaryText} text-lg`}>more info</button>
            </div>
        </div>
    )
}