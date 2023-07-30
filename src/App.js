import { useState } from "react";
import "./App.css";
import { useFirebase } from "./context/Firebase";

function App() {
  const firebase = useFirebase();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="App">
      <h1>Firebase</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Email..."
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password..."
      />
      <button onClick={() => firebase.signUpUserWithEmailAndPassword(email, password)}>SignUp</button>
    </div>
  );
}

export default App;
