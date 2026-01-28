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
        <section id="accomodations" >
            <div className="h-200">
                <div className={`h-1/3 ${colorSchema.secondaryBg} flex items-center px-10`}>
                    <p className={`${colorSchema.primaryTitle} text-8xl`}>{dictionary.accomodationsSection.descriptionTitle}</p>
                </div>
                <div className={`h-2/3 ${colorSchema.primaryBg} flex item-center justify-center`}>
                    <div className="flex items-center justify-center">
                        <p className={`${colorSchema.secondaryText} text-lg tracking-wide flex-1 p-20`}>{dictionary.accomodationsSection.desc1}</p>
                        <p className={`${colorSchema.secondaryText} text-lg tracking-wide flex-1 p-20`}>{dictionary.accomodationsSection.desc2}</p>
                    </div>
                </div>
            </div>
            <div className="h-200">
                <div className={`h-1/3 ${colorSchema.primaryBg} flex items-center px-10`}>
                    <p className={`${colorSchema.primaryTitle} text-8xl`}>{dictionary.accomodationsSection.accomodationsTitle}</p>
                </div>
                <div className={`h-2/3 ${colorSchema.primaryBg} flex item-center justify-center`}>
                    <div className="flex items-center justify-center gap-40">
                        { propertyData.accomodations.map((item) => {
                            return <Card key={item.id} colorSchema={colorSchema} accomodation={item}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}