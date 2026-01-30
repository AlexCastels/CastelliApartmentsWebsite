import ButtonComponent from "@/app/components/buttons/ButtonComponent";
import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";
import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";
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
        cta : {
            label : string,
            url : string
        }
    } ;
    colorSchema : ColorSchemaInterface ;
    dictionary : DictionaryInterface ;
}

export default function Card({accomodation , colorSchema , dictionary} : CardPropsInterface){
    return (
        <div className="flex flex-col gap-2">
            <div className={`${colorSchema.secondaryText} h-100 w-80 lg:w-90 flex flex-col gap-4 justify-between pb-4`}>
                <figure className="group relative overflow-hidden rounded-sm h-50 lg:h-55 w-full aspect-video mx-auto shadow-md hover:shadow-xl transition-all duration-500">
                    <Image className="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-[1.05] cursor-pointer "
                        alt="Accomodation image" 
                        src={accomodation.images[0].url} 
                        height={accomodation.images[0].height} 
                        width={accomodation.images[0].width}
                    />
                </figure>
                <div id="header" className="flex justify-between">
                    <div className="flex flex-col flex-1">
                        <p>{dictionary.accomodationsSection.cardDetail.maxGuests} {accomodation.numberOfPeople}</p>
                        <p>{dictionary.accomodationsSection.cardDetail.bed} /</p>
                        <p>{dictionary.accomodationsSection.cardDetail.sofa}</p>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                        <Image className="h-7 w-7 scale-95 filter icon-white opacity-70" alt="icon bed" src={'/icons/icons8-bed-100.png'} width={90} height={90} ></Image>
                        <Image className='h-7 w-7 scale-105 pt-1 filter icon-white opacity-80' alt="icon sofa" src={'/icons/icons8-divano-100.png'} width={100} height={100} ></Image>
                    </div>
                </div>
                <div id="body" className={``}>
                    <p className="uppercase text-3xl tracking-wide">{accomodation.name}</p>
                </div>
                <div id="footer" className="flex justify-between items-center gap-2">
                    <p>CIN:{accomodation.CIN}</p>
                    <div className="h-6 w-px bg-slate-400"></div>
                    <p>CIR:{accomodation.CIR}</p>
                </div>
            </div>
            <div className="self-end">
                <button className={`${colorSchema.secondaryText} text-lg flex gap-1 cursor-pointer hover:ring-2 hover:ring-zinc-300 transition duration-300  p-1`}>
                    <p>{accomodation.cta.label}</p>
                    <Image className="invert brightness-0 saturate-0 opacity-90 pb-px"
                        src="/icons/arrow-right.png" 
                        width={24} 
                        height={24} 
                        alt="Arrow svg"
                    />
                </button>
            </div>
        </div>
    )
}