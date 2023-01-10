import { useEffect, useState } from "react";
import { db, auth } from "../Server/firebase";
import { collection, addDoc, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import "./ChatBot.css"; 

function ChatBot () {
  const [text, setText] = useState([]);
  const [messages, setMessages] = useState([]);

  const addMessageToFirestore = async() => {
    await addDoc(collection(db, "chatbot"), {
      text: text,
      photoURL: auth.currentUser.photoURL,
      displayName: auth.currentUser.displayName,
      timestamp: Date.now(),
      userId: auth.currentUser.uid,
    });
    setText("");
  }

  const getMessagesFromFirestore = async() => {
    onSnapshot(query(collection(db, "chatbot"),orderBy("timestamp", "desc"),limit(20)), (querySnapshot) => {
      
      const messages = querySnapshot.docs.map((doc) => doc.data()).reverse();
      // change timestamp to date
      messages.forEach((message) => {
        message.timestamp = new Date(message.timestamp).toLocaleString();
      });

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
            <img src={message.photoURL} className="profileImage"/>
            <div className="ChatBot_Body_Message_layout">
              <div className="ChatBot_Body_Message_Info">
                {message.displayName}
                {message.timestamp}
              </div>
              <div className="ChatBot_Body_Message_Text">
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ChatBot_Input">
        <input 
          type="text" 
          value={text} 
          placeholder="Type a message" 
          className="ChatBot_Input_Text"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" ? addMessageToFirestore() : null}
        />
      </div>
    </div>
  );
}

export default ChatBot;