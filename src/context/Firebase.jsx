import { createContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {getDatabase, set, ref} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDeB0Eh-PiBtdylGO0JRQJ2dj7R0fAOT-g",
  authDomain: "fir-series-2.firebaseapp.com",
  projectId: "fir-series-2",
  storageBucket: "fir-series-2.appspot.com",
  messagingSenderId: "83677404099",
  appId: "1:83677404099:web:1366f17676bfad4ebfbb76",
  databaseURL : "https://fir-series-2-default-rtdb.firebaseio.com/",
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp)


const FirebaseContext = createContext(null)


export const FirebaseProvider = (props) => {
    const signUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const putDataInDatabase = (key, data) => set(ref(database, key), data)

    return (
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword, putDataInDatabase}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}