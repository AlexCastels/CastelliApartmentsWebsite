import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";
import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";
import Image from "next/image";
import Link from "next/link";

interface NearbySectionProps {
    nearby : {
        name: string,
        image : {
            url: string,
            width: number,
            height: number,
            description: string
        } ,
        distance: number,
        time: number,
        url: string
    }[],
    colorSchema : ColorSchemaInterface ;
    dictionary : DictionaryInterface ;
}

export default function Nearbysection( {nearby , colorSchema , dictionary} : NearbySectionProps ){
    return (
        <section id="nearbySection" className={`w-full h-200`}>
            <div className={`h-1/5 md:h-1/3 ${colorSchema.tertiaryBg} flex items-center px-4 md:px-10`}>
                <p className={`${colorSchema.primaryTitle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}>{dictionary.nearbySection.title}</p>
            </div>
            <div className={`h-4/5 md:h-2/3 ${colorSchema.primaryBg} flex items-center px-4 md:px-10`}>
                <div className="grid grid-cols-4 gap-10 w-full">
                    { nearby.map((item , index)=>{
                        return (
                            <Link target="_blank" rel="noopener noreferrer" href={item.url} key={index} className={`flex items-center justify-between gap-2 rounded-sm ${colorSchema.tertiaryBg} hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
                                <Image className="h-28 w-28 object-fill aspect-square rounded-l-sm"
                                    src={item.image.url}
                                    alt={item.image.description}
                                    width={item.image.width}
                                    height={item.image.height}
                                />
                                <div className={`flex flex-1 flex-col gap-2 tracking-widest ${colorSchema.secondaryText}`}>
                                    <div className="flex items-center gap-1">
                                        <Image className="h-6 w-6 filter icon-white"
                                            alt="Map icon"
                                            src={'/icons/map/pin-map.png'}
                                            width={100}
                                            height={100}
                                        />
                                        <p className="text-sm">{item.name}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-1">
                                            <Image className="h-6 w-6 filter icon-white"
                                                alt="Map icon"
                                                src={'/icons/map/itinerario.png'}
                                                width={100}
                                                height={100}
                                            />
                                            <p className="text-sm">{item.distance}<span className="text-zinc-300 text-[10px]">m</span></p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Image className="h-6 w-6 filter icon-white"
                                                alt="Map icon"
                                                src={'/icons/map/walk.png'}
                                                width={100}
                                                height={100}
                                            />
                                            <p className="text-sm">{item.time}<span className="text-zinc-300 text-[10px]">min</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) }
                </div>
            </div>
        </section>
    )
}