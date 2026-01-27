import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface"
import Image from "next/image";
import Link from "next/link";

interface SocialLinksPropsInterface {
    colorSchema : ColorSchemaInterface ;
    socialLinks: {
        id: number;
        name: string;
        icon: string;
        url: string;
    }[];
}

export default function SocialLinksComponent({colorSchema  , socialLinks} : SocialLinksPropsInterface){
    return (
        <div className="flex items-center justify-center gap-4 lg:gap-6">
            { socialLinks.map((item) => {
                return (
                    <Link key={item.id} href={item.url} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                        <Image className={`invert brightness-0 saturate-0 opacity-90 hover:opacity-80 transition rounded-sm h-10 w-10 lg:w-14 lg:h-14`}
                            src={item.icon}
                            alt={`Social icon img for ${item.name}`}
                            width={50}
                            height={50}
                        />
                    </Link>
                )})
            }
        </div>
    )
}