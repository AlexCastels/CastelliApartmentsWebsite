import { PropertyDataInterface } from "@/app/models/propertyData/propertyData.interface";

export const it : PropertyDataInterface = {
    lang : 'it',
    id : 1 ,
    idBooking: 0,
    isOnline: true,
    CIR: 0,
    CIN: 0,
    name: "Castelli Apartments",
    description: "",
    type: "",
    urlBooking: "",
    urlBedAndBreakfast : "",
    images : [],
    headerPhoto: {
        url: "/images/header.png",
        width: 3100,
        height: 2067,
        description: "Foto di testata"
    },
    place: {
        region: "Sicilia",
        province: "PA",
        city: "Palermo",
        zone: "Stazione Centrale",
        description: "Centro Storico",
        latitude: 38.11167423076779,
        longitude: 13.363441030365276,
        address: "Vicolo La Rocca alle case nuove",
        houseNumber: "10",
        cap: "90134"
    },
    contacts: {
        show: true,
        tel1: 0,
        tel2: 0,
        email: "castelliapartments@gmail.com",
        socialLinks : [
            {
                id : 1,
                name: 'Facebook' ,
                icon : '/icons/facebook.svg',
                url : 'https://www.facebook.com/profile.php?id=61586365257167'
            },
            {
                id : 2,
                name: 'Instagram' ,
                icon : '/icons/instagram.svg',
                url : ''
            },
            {
                id : 3,
                name: 'Bed-and-breakfast' ,
                icon : '/icons/beb.svg',
                url : ''
            },
            {
                id : 4,
                name: 'Booking' ,
                icon : '/icons/bookingdotcom.svg',
                url : ''
            } ,
            {
                id : 5,
                name: 'Airbnb' ,
                icon : '/icons/airbnb.svg',
                url : ''
            } ,
        ],
        webSite: "",
    },
    rewies: {
        numberReviews: 0,
        averageReview: 0,
        stars: 0,
        reviewList: [
            {
                name: "",
                text: "",
                answer: "",
                url: "",
            }
        ]
    },
    certificates: [
        {
            url: "",
            width: 0,
            height: 0,
            description: ""
        }
    ],
    host: {
        name: "",
        surname: "",
        description: "",
        foto: []
    },
    featureList: [
        {
            id: 1,
            ico: "/icons/features/house.png",
            name: "Appartamento",
            description : "" ,
        },
        {
            id: 2,
            ico: "/icons/features/kitchen.png",
            name: "Cucina",
            description : "" ,
        },
        {
            id: 3,
            ico: "/icons/features/aria-condizionata.png",
            name: "Aria Condizionata",
            description : "" ,
        },
        {
            id: 4,
            ico: "/icons/features/wi-fi.png",
            name: "Wi-fi",
            description : "" ,
        },
        {
            id: 5,
            ico: "/icons/features/netflix.png",
            name: "Netflix",
            description : "" ,
        },
        {
            id: 6,
            ico: "/icons/features/animal.png",
            name: "Animali",
            description : "" ,
        },
    ],
    nearBy : [
        {
            name: "",
            latitude: 0,
            longitude: 0,
            distance: 0,
            idPlace: 0,
            url: ""
        },
    ],
    accomodations: [
        {
            id: 1,
            name: "Ballarò",
            description: "",
            numberOfPeople : 4,
            CIR: 123456789000,
            CIN: 123456789000,
            images: [
                {
                    url: "/images/accomodation-1/0Y0B3406.jpg",
                    width: 3100,
                    height: 2067,
                    description: "Accomodation image"
                } ,
                {
                    url: "/images/accomodation-1/0Y0B3411.jpg",
                    width: 3100,
                    height: 2067,
                    description: "Accomodation image"
                } ,
            ],
            cta : {
                label : 'Più informazioni',
                url : ''
            }
        },
        {
            id: 2,
            name: "Maqueda",
            description: "",
            numberOfPeople : 4,
            CIR: 123456789000,
            CIN: 123456789000,
            images: [
                {
                    url: "/images/accomodation-2/0Y0B3449-HDR.jpg",
                    width: 3100,
                    height: 2067,
                    description: "Accomodation image"
                } ,
                {
                    url: "/images/accomodation-2/0Y0B3496-HDR.jpg",
                    width: 3100,
                    height: 2067,
                    description: "Accomodation image"
                } ,
                {
                    url: "/images/accomodation-2/0Y0B3499-HDR.jpg",
                    width: 3100,
                    height: 2067,
                    description: "Accomodation image"
                } ,
            ],
            cta : {
                label : 'Più informazioni',
                url : ''
            }
        },
    ],
}