"use client"

import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";
import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface NearbyScrollableContainerInterface {
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
}

export default function NearbyScrollableContainer({nearby , colorSchema} : NearbyScrollableContainerInterface){

    const [ columnIndex , setColumnIndex ] = useState<number>(1) ;
    const listRef = useRef<HTMLDivElement>(null) ;

    function scrollToIndex(index: number){
        if (!listRef.current) return;

        const child = listRef.current.children[index] as HTMLElement;
        if (!child) return;

        child.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });

        if(columnIndex === 14){
            setColumnIndex(1)
        } else {
            setColumnIndex(index);
        }

    };

    console.log(columnIndex)

    return (
        <div ref={listRef} className="grid grid-cols-4 gap-16 md:gap-10 w-full min-w-350">
            { nearby.map((item , index)=>{
                return (
                    <Link target="_blank" rel="noopener noreferrer" href={item.url} key={index} className={`relative flex items-center justify-between gap-2 rounded-sm ${colorSchema.tertiaryBg} hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
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
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <Image className="h-6 w-6 filter icon-white"
                                        alt="Map icon"
                                        src={'/icons/map/itinerario.png'}
                                        width={100}
                                        height={100}
                                    />
                                    <p className="text-sm">{item.distance}<span className="text-zinc-300 text-[10px]">m</span></p>
                                </div>
                                <div className="h-4 w-px bg-slate-400"></div>
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
                        <Image className="absolute bottom-2 right-2 h-4 w-4 filter icon-white opacity-80"
                            alt="Map icon"
                            src={'/icons/external-link.png'}
                            width={100}
                            height={100}
                        />
                    </Link>
                )
            }) }
            <button
                onClick={() => scrollToIndex(Math.max(0, columnIndex - 3))}
                className="xl:hidden block absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-zinc-900 hover:bg-zinc-500 border border-gray-600 p-4 transition cursor-pointer text-zinc-100"
            >
                {'<'}
            </button>
            <button
                onClick={() =>
                scrollToIndex(Math.min(columnIndex + 3))
            }
                className="xl:hidden block absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-zinc-900 hover:bg-zinc-500 border border-gray-600 p-4 transition cursor-pointer text-zinc-100"
            >
                {'>'}
            </button>
        </div>
    )
}