import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";
import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";
import { PropertyDataInterface } from "@/app/models/propertyData/propertyData.interface";
import Card from "../card/Card";

interface AccomodationSectionInterface {
    propertyData : PropertyDataInterface ;
    colorSchema : ColorSchemaInterface ;
    dictionary : DictionaryInterface ;
}

export default function AccomodationSection({propertyData , dictionary , colorSchema} : AccomodationSectionInterface){
    return (
        <section id="accomodations">
            <div className="h-200">
                <div className={`h-1/5 md:h-1/3 ${colorSchema.tertiaryBg} flex items-center px-4 md:px-10`}>
                    <p className={`${colorSchema.primaryTitle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}>{dictionary.accomodationsSection.descriptionTitle}</p>
                </div>
                <div className={`h-4/5 md:h-2/3 ${colorSchema.primaryBg} flex flex-col md:flex-row item-center justify-center`}>
                    <div className="flex flex-col md:flex-row gap-0 md:gap-10 md:px-10 items-center justify-center">
                        <p className={`${colorSchema.secondaryText} flex items-center whitespace-pre-line text-sm md:text-xl tracking-wide flex-1 lg:max-w-[1000] px-6 pb-8 md:pb-0`}>{dictionary.accomodationsSection.desc1}</p>
                        <p className={`${colorSchema.secondaryText} flex items-center whitespace-pre-line text-sm md:text-xl tracking-wide flex-1 lg:max-w-[1000] px-6 `}>{dictionary.accomodationsSection.desc2}</p>
                    </div>
                </div>
            </div>
            <div className="h-200">
                <div className={`h-1/5 md:h-1/3 ${colorSchema.tertiaryBg} flex items-center px-4 md:px-10`}>
                    <p className={`${colorSchema.primaryTitle} text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}>{dictionary.accomodationsSection.accomodationsTitle}</p>
                </div>
                <div className={`md:h-2/3 ${colorSchema.primaryBg} flex item-center justify-center py-20 md:py-0`}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-30 px-4">
                        { propertyData.accomodations.map((item) => {
                            return <Card key={item.id} colorSchema={colorSchema} accomodation={item} dictionary={dictionary}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}