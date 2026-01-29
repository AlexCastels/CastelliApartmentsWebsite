import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";
import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";
import { PropertyDataInterface } from "@/app/models/propertyData/propertyData.interface"
import Image from "next/image";

interface FeatureSectionInterface {
    featureList: {
        id: number,
        ico: string,
        name: string,
        description : string
    }[] ;
    colorSchema : ColorSchemaInterface ;
    dictionary : DictionaryInterface ;
}

export default function FeatureSection({featureList , colorSchema , dictionary} : FeatureSectionInterface ){
    return (
        <section id="featureSection" className={`relative w-full h-200`}>
            <div className={`h-1/5 md:h-1/3 ${colorSchema.tertiaryBg} flex items-center px-4 md:px-10`}>
                <p className={`${colorSchema.primaryTitle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}>{dictionary.featureSection.title}</p>
            </div>
            <div className={`h-4/5 md:h-2/3 ${colorSchema.primaryBg} flex items-center px-4 md:px-10`}>
                <div id="container" className="grid grid-cols-2 lg:grid-cols-3 gap-y-14">
                    { featureList.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-col items-center gap-4 lg:gap-10">
                                <Image className="h-10 w-10 lg:h-20 lg:w-20 invert brightness-0 saturate-0 opacity-90"
                                    src={item.ico}
                                    alt={item.description}
                                    width={100}
                                    height={100}
                                />
                                <p className={`${colorSchema.secondaryText} text-center px-2 lg:px-6 text-xs lg:text-base`}>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}