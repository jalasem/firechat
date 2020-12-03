import React from "react";
import ChatItem from "./ChatItem";
import "./ChatList.css";
import SearchForm from "./SearchForm";

export default function ChatList({ chats }) {
  return (
    <div className="ChatList">
      <nav>
        <img src="/images/jalasem.jpg" alt="Profile" />
      </nav>
      <SearchForm />
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem key={chat} />
        ))}
      </div>
    </div>
  );
}
