import { DictionaryInterface } from "@/app/models/dictionary/dictionary.interface";

export const it : DictionaryInterface = {
    lang : 'it' ,
    headerSection : {
        title : "Visit Palermo",
        ctaLabel : 'Prenota',
    },
    videoSection : {
        title : 'Esplora la città',
        subtitle: 'Inizia dal cuore'
    } ,
    accomodationsSection : {
        descriptionTitle : 'Per chi è sempre in movimento',
        desc1: `Situata nel cuore di Palermo, tra il vivace mercato storico di Ballarò e via Maqueda, la struttura gode di una posizione centrale e strategica. 

            La Stazione Centrale è raggiungibile in appena 3 minuti a piedi, rendendo gli spostamenti semplici sia per chi arriva in treno sia per chi desidera esplorare Palermo e i suoi dintorni. 
        `,
        desc2:`Molti dei principali punti di interesse sono facilmente raggiungibili a piedi, tra cui i 4 Canti, La Cattedrale ed il Teatro Massimo, senza la necessità di utilizzare mezzi di trasporto. 

            La zona permette di immergersi fin da subito nell’atmosfera autentica della città, tra tradizione, cultura e vita quotidiana.`,
        accomodationsTitle : 'I nostri alloggi',
        cardDetail : {
            maxGuests : 'Ospiti massimi' ,
            bed : '1 Letto matrimoniale',
            sofa : '1 Divano letto',
        },
    },
    featureSection : {
        title : 'Caratteristiche'
    },
    nearbySection : {
        title : 'Tutto ciò di cui hai bisogno a due passi'
    },
    mapSection : {
        title : 'Eccoci qui',
        description : ''
    },
    accomodationDeatilSection : {
        title : 'Alloggio siciliano',
        subTitle : 'Showcase the best your property has to offer by highlighting one of your accommodations. Give a room tour with a gallery of photos or a walkthrough video.'
    } ,
    contactSetciont : {
        title : 'Rimaniamo in contatto' 
    },
    footerSection : {
        title : 'I nostri contatti',
        realized : 'Realizzato da: '
    }
}