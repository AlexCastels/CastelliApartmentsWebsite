import Image from "next/image";
import Link from "next/link";

interface ButtonComponentPropsInterface {
    label : string ;
    url : string ;
}

export default function ButtonComponent( {label , url} : ButtonComponentPropsInterface ){
    return (
        <Link href={url} className="bg-black/20 flex items-center gap-2 hover:ring-2 ring-white p-2 transition-all duration-150">
            <p className="uppercase font-semibold tracking-widest drop-shadow-lg text-white">{label}</p>
            <Image className="invert brightness-0 saturate-0"
                src="/icons/arrow-right.svg" 
                width={24} 
                height={24} 
                alt="Arrow svg"
            />
        </Link>
    )
}