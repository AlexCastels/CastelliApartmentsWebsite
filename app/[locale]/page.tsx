import HeaderSection from "./components/sections/HeaderSection";
import { en as dictionaryEn} from "../data/static/locale/dictionary/en";
import { it as dictionaryIt} from "../data/static/locale/dictionary/it";
import { en as dataEn } from "../data/static/data/mainProperty/en";
import { it as dataIt } from "../data/static/data/mainProperty/it";
import { notFound } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import { it as linksIt } from "../data/static/data/links/it";
import { en as linksEn } from "../data/static/data/links/en";
import { colorSchema } from "../style/color-schema";
import VideoSection from "./components/sections/VideoSection";
import AccomodationSection from "./components/sections/AccomodationSection";
import FeatureSection from "./components/sections/FeatureSection";
import Nearbysection from "./components/sections/NearbySection";
const VALID_LOCALES = ['it' , 'en'] ;

interface HomePropsInterface {
	params : { locale : string } ;
}

export default async function Home({ params } : HomePropsInterface) {

	const { locale } = await params ;

	if (!VALID_LOCALES.includes(locale)) {
        return notFound(); // 404 immediato
    }

	const propertyData = locale === 'it' ? dataIt : dataEn ;
	const dictionary = locale === 'it' ? dictionaryIt : dictionaryEn ;
	const navLinks = locale === 'it' ? linksIt : linksEn ;

	return (
		<main>
			<Navbar              links={navLinks}                       colorSchema={colorSchema}/>
			<HeaderSection       propertyData={propertyData}            colorSchema={colorSchema} dictionary={dictionary}/>
			<VideoSection                                               colorSchema={colorSchema} dictionary={dictionary}/>
			<AccomodationSection propertyData={propertyData}            colorSchema={colorSchema} dictionary={dictionary}/>
			<FeatureSection      featureList={propertyData.featureList} colorSchema={colorSchema} dictionary={dictionary}/>
			<Nearbysection       nearby={propertyData.nearby}           colorSchema={colorSchema} dictionary={dictionary}/>
		</main>

		// https://commons.wikimedia.org/w/index.php?search=palermo&title=Special%3AMediaSearch&type=image cercare qui img per le zone

		//nei dettagli e info inserire informazioni su cappella palatina , foro italico, molto trapezoidale e sicilia in generale
	);
}
