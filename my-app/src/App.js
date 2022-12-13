import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';
import {useState,useEffect} from 'react';
import {auth} from './Server/firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./Components/NotFound";
import SpeechToText from "./Components/SpeechToText";
import AzureSTTFromFile from "./Azure/STT/FromFile";
import AzureSTTFromMic from "./Azure/STT/FromMic";

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
  })

  useEffect(() => {
    checkIfUser();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {user 
          ? (
            <>
              <Header />
              <Routes>  
                <Route path="/" element={<Home />} />
                <Route path="/SpeechToText" element={<SpeechToText />} />
                <Route path="/Azure/STT/FromFile" element={<AzureSTTFromFile />} />
                <Route path="/Azure/STT/FromMic" element={<AzureSTTFromMic />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          ) : (
            <> 
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </>
          )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;