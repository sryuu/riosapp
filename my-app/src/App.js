import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';
import {useState,useEffect} from 'react';
import {auth} from './Server/firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./Components/NotFound";
import SpeechToText from "./Components/STT/SpeechToText";
import AzureSTTFromFile from "./Components/STT/Azure/FromFile";
import AzureSTTFromMic from "./Components/STT/Azure/FromMic";
import ChatBot from "./Components/ChatBot";

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
                <Route path="/STT/Azure/FromFile" element={<AzureSTTFromFile />} />
                <Route path="/STT/Azure/FromMic" element={<AzureSTTFromMic />} />
                <Route path="/ChatBot" element={<ChatBot />} />
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