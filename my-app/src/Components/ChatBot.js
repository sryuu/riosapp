import { useState } from "react";
import { db,auth} from "../Server/firebase";
import { collection, addDoc } from "firebase/firestore"; 

function ChatBot () {
  const [text, setText] = useState([]);

  console.log (text);

  const addMessageToFirestore = async() => {
    setText("");
  }

  return (
    <div className="ChatBot">
      <h1>ChatBot</h1>
      <div className="ChatBot_Body">
      </div>
      <div className="ChatBot_Input">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => addMessageToFirestore()}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;