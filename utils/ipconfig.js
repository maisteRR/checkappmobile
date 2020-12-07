import {API_KEY} from "@env";
import * as firebase from "firebase";
const config = {
    apiKey: `${API_KEY}`,
    authDomain: "checkapp-ecf7d.firebaseapp.com",
    databaseURL: "https://checkapp-ecf7d.firebaseio.com",
    projectId: "checkapp-ecf7d",
    storageBucket: "checkapp-ecf7d.appspot.com",
    messagingSenderId: "698598467527",
    appId: "1:698598467527:web:f3d7f14fccf0fbd15ddbe2"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();