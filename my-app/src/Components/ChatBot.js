import { useEffect, useState } from "react";
import { db,auth} from "../Server/firebase";
import { collection, addDoc, onSnapshot ,query,orderBy } from "firebase/firestore"; 

function ChatBot () {
  const [text, setText] = useState([]);
  const [messages, setMessages] = useState([]);

  console.log (text);

  const addMessageToFirestore = async() => {
    await addDoc(collection(db, "chatbot"), {
      text: text,
      photoURL: auth.currentUser.photoURL,
      displayName: auth.currentUser.displayName,
      timestamp: Date.now(),
    });
    setText("");
  }

  const getMessagesFromFirestore = async() => {
    onSnapshot(query(collection(db, "chatbot"),orderBy("timestamp", "asc")), (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => doc.data());
      setMessages(messages);
    });
  }

  useEffect(() => {
    getMessagesFromFirestore();
  }, [onSnapshot]);

  return (
    <div className="ChatBot">
      <h1>ChatBot</h1>
      <div className="ChatBot_Body">
        {messages.map((message) => (
          <div className="ChatBot_Body_Message">
            {message.displayName}:
            {message.text}
          </div>
        ))}
      </div>
      <div className="ChatBot_Input">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => addMessageToFirestore()}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;