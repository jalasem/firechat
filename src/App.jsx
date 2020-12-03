import React, { useState } from "react";
import "./App.css";
import ChatArea from "./components/ChatArea";
import ChatList from "./components/ChatList";

export default function App() {
  const [chats, setChats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="App">
      <ChatList chats={chats} />
      <ChatArea />
    </div>
  );
}
