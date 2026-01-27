export default function VideoSection(){
    return (
        <section className="w-full px-10 py-20 bg-cyan-800">
            <video className="w-full aspect-video" width="320" height="240" controls preload="none" autoPlay>
                <source src="/video/video.mp4" type="video/mp4" />
            </video>
        </section>
    )
}