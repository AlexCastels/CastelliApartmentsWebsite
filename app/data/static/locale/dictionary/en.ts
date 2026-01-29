import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";

export const en : DictionaryInterface = {
    lang : 'en' ,
    headerSection : {
        title : "Visit Palermo",
        ctaLabel : 'Book your stay',
    },
    videoSection : {
        title : 'Explore the city',
        subtitle: 'Start from the heart'
    } ,
    accomodationsSection : {
        descriptionTitle : 'For people on the go',
        desc1: `Located in the heart of Palermo, between the lively historic Ballarò market and Via Maqueda, the property enjoys a central and strategic location. 


                The Central Station is just a 3-minute walk away, making it easy for both those arriving by train and those wishing to explore Palermo and its surroundings.`,
        desc2: `Many of the main points of interest are within walking distance, including the Quattro Canti, the Cathedral, and the Teatro Massimo, without the need for transportation. 


                The area allows guests to immediately immerse themselves in the authentic atmosphere of the city, full of tradition, culture, and daily life. `,
        accomodationsTitle : 'Our accommodations',
        cardDetail : {
            maxGuests : 'Max guests' ,
            bed : '1 Bed king size',
            sofa : '1 Sofa bed',
        },
    },
    featureSection : {
        title : 'Feature'
    },
    nearbySection : {
        title : 'All you need is just steps away'
    },
    mapSection : {
        title : 'Here we are',
        description : ''
    },
    accomodationDeatilSection : {
        title : 'Sicilian accomodation',
        subTitle : 'Showcase the best your property has to offer by highlighting one of your accommodations. Give a room tour with a gallery of photos or a walkthrough video.'
    } ,
    contactSetciont : {
        title : 'Keep in touch' 
    },
    footerSection : {
        title : 'Our contact',
        realized : 'Realized from: '
    }
}