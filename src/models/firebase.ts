// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import type {FirebaseApp} from "firebase/app";
import type {Auth, User} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "efowffowenfownfoiwnfoi",
    apiKey: "AIzaSyB_Qxp7vZY1V17rjSbH1PO4HKIgmyofIYM",
    authDomain: "vapetalk-99ade.firebaseapp.com",
    projectId: "vapetalk-99ade",
    storageBucket: "vapetalk-99ade.appspot.com",
    messagingSenderId: "11319839497",
    appId: "1:11319839497:web:f1cefb1db18c9241e061d8",
    measurementId: "G-V5H996Y0YV"
};

let app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(app);

export function getCurrentUsers(): User | null {
    return auth.currentUser;
}
