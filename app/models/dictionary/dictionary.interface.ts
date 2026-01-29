export interface DictionaryInterface {
    lang : string ,
    headerSection : {
        title : string,
        ctaLabel : string,
    },
    videoSection : {
        title : string,
        subtitle: string
    } ,
    accomodationsSection : {
        descriptionTitle : string,
        desc1: string,
        desc2: string,
        accomodationsTitle : string,
        cardDetail : {
            maxGuests : string ,
            bed : string,
            sofa : string,
        },
    },
    featureSection : {
        title : string
    },
    nearbySection : {
        title : string
    },
    mapSection : {
        title : string,
        description : string
    },
    accomodationDeatilSection : {
        title : string,
        subTitle : string
    } ,
    contactSetciont : {
        title : string 
    },
    footerSection : {
        title :string, 
        realized : string
    }
}