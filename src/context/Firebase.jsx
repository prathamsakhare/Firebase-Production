import { createContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDeB0Eh-PiBtdylGO0JRQJ2dj7R0fAOT-g",
  authDomain: "fir-series-2.firebaseapp.com",
  projectId: "fir-series-2",
  storageBucket: "fir-series-2.appspot.com",
  messagingSenderId: "83677404099",
  appId: "1:83677404099:web:1366f17676bfad4ebfbb76",
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);



const FirebaseContext = createContext(null)


export const FirebaseProvider = (props) => {
    const signUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    return (
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}