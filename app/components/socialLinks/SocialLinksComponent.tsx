import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface"
import Image from "next/image";
import Link from "next/link";

interface SocialLinksPropsInterface {
    colorSchema : ColorSchemaInterface ;
    socialLinks : [] ;
}

export default function SocialLinksComponent({colorSchema  , socialLinks} : SocialLinksPropsInterface){
    return (
        <div className="">
            { socialLinks.map((item) => {
                return (
                    // <Link href={item.url}>
                    //     <Image>

                    //     </Image>
                    // </Link>
                )
            })

            }
        </div>
    )
}