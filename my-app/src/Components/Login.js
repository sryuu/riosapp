import React, {useState} from "react";
import {auth} from "../Server/firebase";
import './Login.css';
import Button from '@mui/material/Button';

import { 
  GoogleAuthProvider , 
  signInWithPopup , 
  signInWithEmailAndPassword} 
from "firebase/auth";

const provider = new GoogleAuthProvider();

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="pageLayout">
      <div className="title">
        Login
      </div>
      <div className="login">
        <div className="loginWithEmailAndPass">
          email
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          password
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Buttons">
          <Button variant="outlined" onClick= {() => signInWithEmailAndPassword(email, password)}>Login</Button>
          <Button variant="outlined" onClick= {() => signInWithPopup(auth,provider)}>Login with Google</Button>
        </div>
      </div>
    </div>
  )
}

export default Login