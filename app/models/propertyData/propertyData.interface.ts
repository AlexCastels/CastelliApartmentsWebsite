export interface PropertyDataInterface {
    lang : string,
    id : number ,
    idBooking: number,
    isOnline: boolean,
    CIR: number,
    CIN: number,
    name: string,
    description: string,
    type: string
    urlBooking: string
    urlBedAndBreakfast : string
    images : [],
    headerPhoto: {
        url: string,
        width: number,
        height: number,
        description: string
    },
    place: {
        region: string,
        province: string,
        city: string,
        zone: string,
        description: string,
        latitude: number,
        longitude: number,
        address: string,
        houseNumber: string,
        cap: string
    },
    contacts: {
        show: boolean,
        tel1: number,
        tel2: number,
        email: string,
        socialLinks : {
            id : number,
            name: string ,
            icon : string,
            url : string
        }[],
        webSite: string
    },
    rewies: {
        numberReviews: number,
        averageReview: number,
        stars: number,
        reviewList: [
            {
                name: string,
                text: string,
                answer: string,
                url: string,
            }
        ]
    },
    certificates: [
        {
            url: string,
            width: number,
            height: number,
            description: string
        }
    ],
    host: {
        name: string,
        surname: string,
        description: string,
        foto: []
    },
    featureList: [
        {
            ico: string,
            id: string,
            name: string
        },
    ],
    nearBy : [
        {
            name: string,
            latitude: number,
            longitude: number,
            distance: number,
            idPlace: number,
            url: string
        },
    ],
    accomodations: {
        id: number,
        name: string,
        description: string,
        numberOfPeople : number,
        CIR: number,
        CIN: number,
        images:{
            url: string,
            width: number,
            height: number,
            description: string
        }[],
        cta : string
    }[]
}