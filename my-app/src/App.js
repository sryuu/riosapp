import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import {useState,useEffect} from 'react';
import {auth} from './Server/firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
    return checkIfUser 
  }, [user])

  return (
    <div className="App">
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
