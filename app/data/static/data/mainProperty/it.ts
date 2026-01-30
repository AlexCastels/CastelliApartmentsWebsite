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
            description : "Appartamenti completi e indipendenti" ,
        },
        {
            id: 2,
            ico: "/icons/features/kitchen.png",
            name: "Cucina",
            description : "Con cucina accessoriata per ogni esigenza" ,
        },
        {
            id: 3,
            ico: "/icons/features/aria-condizionata.png",
            name: "Aria Condizionata",
            description : "Dotati di climatizzatore" ,
        },
        {
            id: 4,
            ico: "/icons/features/wi-fi.png",
            name: "Wi-fi",
            description : "Il wi-fi è presente in maniera gratuita" ,
        },
        {
            id: 5,
            ico: "/icons/features/netflix.png",
            name: "Netflix",
            description : "Offriamo un pacchetto di piattaforme streaming gratuite per passare piacevoli serate" ,
        },
        {
            id: 6,
            ico: "/icons/features/animal.png",
            name: "Animali",
            description : `Siamo "animal-friendly" , le strutture consentono di ospitare animali e sono dotate di un kit per curare il soggiorno del vostro cucciolo` ,
        },
    ],
    nearby : [
        {
            name: "Cattedrale",
            image : {
                url: "/images/nearby/palermo-cathedral.jpg",
                width: 1280,
                height: 853,
                description: "Palermo cathedral image"
            } , 
            distance: 950,
            time: 13,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Cattedrale+di+Palermo,+Via+Vittorio+Emanuele,+490,+90134+Palermo+PA/@38.1134919,13.3575015,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319ef6198ea25c9:0x8cda5f90f930776a!2m2!1d13.3560504!2d38.1143321!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Quattro Canti",
            image : {
                url: "/images/nearby/quattro-canti.jpg",
                width: 1280,
                height: 853,
                description: "Quattro Canti image"
            } , 
            distance: 600 ,
            time : 8 ,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Quattro+Canti,+P.za+Villena,+90133+Palermo+PA/@38.1135586,13.3600962,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e58ad6a9c999:0x22ef94a7ba5bfaa0!2m2!1d13.3612399!2d38.1157891!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "La Cala",
            image : {
                url: "/images/nearby/la-cala.jpg",
                width: 1280,
                height: 853,
                description: "La Cala port image"
            } , 
            distance: 1300,
            time: 17,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/38.1192142,13.3671141/@38.1190142,13.3669198,90m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m0!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Mercato Vucciria",
            image : {
                url: "/images/nearby/vucciriaHQ.webp",
                width: 640,
                height: 427,
                description: "Vucciria market image"
            } , 
            distance: 950,
            time: 12,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/La+Vucciria,+P.zza+Vicer%C3%A8+Caracciolo,+90133+Palermo+PA/@38.1143598,13.3603772,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e5006f248143:0x8b0f6dc82dda9d3f!2m2!1d13.3637435!2d38.1173914!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Mercato Ballarò",
            image : {
                url: "/images/nearby/ballaro.jpg",
                width: 640,
                height: 427,
                description: "Ballarò market image"
            } , 
            distance: 180,
            time: 2,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Mercato+Ballar%C3%B2,+Via+Chiappara+Al+Carmine,+23,+90134+Palermo+PA/@38.1110332,13.3606453,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e5002a185d1b:0x87d28ad4f22cfb82!2m2!1d13.3636669!2d38.1106299!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Teatro Massimo",
            image : {
                url: "/images/nearby/teatro-massimo.jpg",
                width: 640,
                height: 427,
                description: "Teatro Massimo image"
            } , 
            distance: 1200,
            time: 17,
            url : "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Teatro+Massimo+di+Palermo,+P.za+Giuseppe+Verdi,+90138+Palermo+PA/@38.1159837,13.3552779,1710m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e5f58244ce49:0x8eecc03c703a402d!2m2!1d13.3574867!2d38.1202618!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Palazzo dei Normanni",
            image : {
                url: "/images/nearby/palazzo-dei-normanni.jpg",
                width: 640,
                height: 427,
                description: "Quattro Canti image"
            } , 
            distance: 1100,
            time: 15,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Palazzo+dei+Normanni,+Piazza+del+Parlamento,+1,+90129+Palermo+PA/@38.1107227,13.3557837,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319ef6460943f45:0x71eca31626fb2bc5!2m2!1d13.3534896!2d38.1109199!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Piazza Pretoria",
            image : {
                url: "/images/nearby/piazza-pretoria.jpg",
                width: 640,
                height: 427,
                description: "Quattro Canti image"
            } , 
            distance: 600,
            time: 8,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Piazza+Pretoria,+90133+Palermo+PA/@38.1135261,13.3605077,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e58b1bce2cd9:0x99023b97c9188633!2m2!1d13.3621028!2d38.1157206!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Piazza Pretoria",
            image : {
                url: "/images/nearby/piazza-pretoria.jpg",
                width: 640,
                height: 427,
                description: "Quattro Canti image"
            } , 
            distance: 600,
            time: 8,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Piazza+Pretoria,+90133+Palermo+PA/@38.1135261,13.3605077,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e58b1bce2cd9:0x99023b97c9188633!2m2!1d13.3621028!2d38.1157206!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Piazza Pretoria",
            image : {
                url: "/images/nearby/piazza-pretoria.jpg",
                width: 640,
                height: 427,
                description: "Quattro Canti image"
            } , 
            distance: 600,
            time: 8,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Piazza+Pretoria,+90133+Palermo+PA/@38.1135261,13.3605077,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e58b1bce2cd9:0x99023b97c9188633!2m2!1d13.3621028!2d38.1157206!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Piazza Pretoria",
            image : {
                url: "/images/nearby/piazza-pretoria.jpg",
                width: 640,
                height: 427,
                description: "Quattro Canti image"
            } , 
            distance: 600,
            time: 8,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Piazza+Pretoria,+90133+Palermo+PA/@38.1135261,13.3605077,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e58b1bce2cd9:0x99023b97c9188633!2m2!1d13.3621028!2d38.1157206!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
        },
        {
            name: "Piazza Pretoria",
            image : {
                url: "/images/nearby/piazza-pretoria.jpg",
                width: 640,
                height: 427,
                description: "Quattro Canti image"
            } , 
            distance: 600,
            time: 8,
            url: "https://www.google.com/maps/dir/Vicolo+la+Rocca+alle+Case+Nuove,+10,+90134+Palermo+PA/Piazza+Pretoria,+90133+Palermo+PA/@38.1135261,13.3605077,855m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x1319e5895da036bf:0xd87fa3e67664012f!2m2!1d13.3631556!2d38.1114328!1m5!1m1!1s0x1319e58b1bce2cd9:0x99023b97c9188633!2m2!1d13.3621028!2d38.1157206!3e2?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
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
                {
            id: 2,
            name: "Maqueda",
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
    ],
}