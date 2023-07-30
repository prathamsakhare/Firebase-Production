import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDeB0Eh-PiBtdylGO0JRQJ2dj7R0fAOT-g",
  authDomain: "fir-series-2.firebaseapp.com",
  projectId: "fir-series-2",
  storageBucket: "fir-series-2.appspot.com",
  messagingSenderId: "83677404099",
  appId: "1:83677404099:web:1366f17676bfad4ebfbb76",
  databaseURL: "https://fir-series-2-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

// ! Custom hook for using firebase's utility functions
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((res) => alert("User Created!"))
      .catch((err) => alert(err));
  };

  const putDataInDatabase = (key, data) =>
    set(ref(database, key), data)
      .then((res) => alert("Data Sent to Database"))
      .catch((err) => alert(err));

  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putDataInDatabase }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
