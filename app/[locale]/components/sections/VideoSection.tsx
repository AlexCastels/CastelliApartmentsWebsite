import { ColorSchemaInterface } from "@/app/models/colorSchema/colorSchema.interface";

interface VideoSectionPropsInterface {
    colorSchema : ColorSchemaInterface ;
    title : string ;
    subtitle : string ;
}

export default function VideoSection({colorSchema , title , subtitle} : VideoSectionPropsInterface ){
    return (
        <section id="video" className={`relative w-full md:h-100 lg:h-200 lg:p-14 ${colorSchema.tertiaryBg}`}>
            <video className="block lg:hidden w-full h-full aspect-video object-fill" width="320" height="240" autoPlay loop muted playsInline>
                <source src="/video/video-sora.mp4" type="video/mp4" />
            </video>
            <video className="hidden lg:block w-full h-full aspect-video object-fill" width="320" height="240" autoPlay loop muted playsInline>
                <source src="/video/video-jai.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-2 left-2 lg:left-20 lg:bottom-20 bg-black/10 p-2 md:bg-transparent md:p-0">
                <p className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl ${colorSchema.secondaryText} tracking-wide uppercase drop-shadow-2xl`}>{title}:</p>
                <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl ${colorSchema.secondaryText} tracking-wide drop-shadow-2xl`}>{subtitle}</p>
            </div>
        </section>
    )
}