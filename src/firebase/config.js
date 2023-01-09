import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey:'AIzaSyAp2PQH82buDygNz7I9AI1lnd2ol5VHIr4 ',
    authDomain:'',
    databaseURL:'https://console.firebase.google.com/project/loremcodes-1/database/loremcodes-1-default-rtdb/data/~2F',
    projectId:'loremcodes-1',
    storageBucket:'loremcodes-1.appspot.com',
    messagingSenderId:'934305108368',
    appId: '1:934305108368:ios:fc70c8fff763cda5cba315',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}