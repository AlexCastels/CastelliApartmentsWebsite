import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";

interface VideoSectionPropsInterface {
    colorSchema : ColorSchemaInterface ;
}

export default function VideoSection({colorSchema} : VideoSectionPropsInterface ){
    return (
        <section className={`relative w-full md:h-100 lg:h-200 lg:p-14 ${colorSchema.primaryBg}`}>
            <video className="w-full h-full aspect-video object-fill" width="320" height="240" autoPlay loop muted playsInline>
                <source src="/video/video-jai.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-2 left-2 lg:left-20 lg:bottom-20">
                <p className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl ${colorSchema.secondaryText} tracking-wide uppercase drop-shadow-2xl`}>EXPLORE THE CITY:</p>
                <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl ${colorSchema.secondaryText} tracking-wide uppercase drop-shadow-2xl`}>Start in the heart</p>
            </div>
        </section>
    )
}