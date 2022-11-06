import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import {useState,useEffect} from 'react';
import {auth} from './Server/firebase';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from "./Components/NotFound";

function App() {
  const [user, setUser] = useState(null);

  // check if user is logged in or not
  const checkIfUser = auth.onAuthStateChanged((user) => {
    if (user) {
      // user is logged in
      setUser(user);
    } else {
      // user is logged out
      setUser(null);
    }
    console.log(user);
  })

  useEffect(() => {
    checkIfUser();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {user 
          ? <Route path="/" element={<Home/>} />
          : <Route path="/" element={<Login/>} />
        }
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;