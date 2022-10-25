import React, {useState} from "react";
import {auth} from "../Server/firebase";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div>
                Login
            </div>
            <div className="login">
                <div>
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
                <div>
                    <button onClick= {() => auth.signInWithEmailAndPassword(email, password)}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login