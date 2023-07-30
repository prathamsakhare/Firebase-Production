import { createContext } from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeB0Eh-PiBtdylGO0JRQJ2dj7R0fAOT-g",
  authDomain: "fir-series-2.firebaseapp.com",
  projectId: "fir-series-2",
  storageBucket: "fir-series-2.appspot.com",
  messagingSenderId: "83677404099",
  appId: "1:83677404099:web:1366f17676bfad4ebfbb76",
};


const firebaseApp = initializeApp(firebaseConfig);



const FirebaseContext = createContext(null)


export const FirebaseProvider = (props) => {
    reutrn (
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}