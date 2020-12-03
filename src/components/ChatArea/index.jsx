import React from "react";
import "./ChatArea.css";
import ChatIntro from "./ChatIntro";

export default function ChatArea({ currentChat }) {
  return !currentChat ? <ChatIntro /> : <div className="ChatArea"></div>;
}
