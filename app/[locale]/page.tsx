import HeaderSection from "./components/sections/HeaderSections";
import { en as dictionaryEn} from "../data/static/locale/dictionary/en";
import { it as dictionaryIt} from "../data/static/locale/dictionary/it";
import { en as dataEn } from "../data/static/data/mainProperty/en";
import { it as dataIt } from "../data/static/data/mainProperty/it";
import { notFound } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import { it as linksIt } from "../data/static/data/links/it";
import { en as linksEn } from "../data/static/data/links/en";
import { colorSchema } from "../style/color-schema";
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
		<div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Navbar links={navLinks} colorSchema={colorSchema}></Navbar>
			<HeaderSection propertyData={propertyData} dictionary={dictionary} colorSchema={colorSchema}></HeaderSection>
		</div>
	);
}
