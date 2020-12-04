import React from "react";
import ChatItem from "./ChatItem";
import "./ChatList.css";
import SearchForm from "./SearchForm";

import StatusIcon from "../icons/StatusIcon";
import ChatIcon from "../icons/ChatIcon";
import OptionIcon from "../icons/OptionIcon";

const optionItems = [
  { text: "New group" },
  { text: "Profile" },
  { text: "Settings" },
  { text: "Logout" },
];
const chatItems = [
  { text: "Archive chat" },
  { text: "Delete chat/Exit group" },
  { text: "Mark as unread" },
];

export default function ChatList({
  chats,
  openMenu,
  openStatus,
  handleNewChatOpen,
}) {
  const _openMenu = (event, items) => {
    event.preventDefault();

    openMenu(items, { top: `${event.clientY}px`, left: `${event.clientX}px` });
  };

  const _openChatMenu = (event) => {
    _openMenu(event, chatItems);
  };

  return (
    <div className="ChatList">
      <nav>
        <img src="/images/jalasem.jpg" alt="Profile" />

        <div className="flex items-center">
          <StatusIcon onClick={openStatus} style={iconStyles} />
          <ChatIcon style={iconStyles} onClick={handleNewChatOpen} />
          <OptionIcon
            style={iconStyles}
            onClick={(e) => _openMenu(e, optionItems)}
          />
        </div>
      </nav>
      <SearchForm />
      <div className="chat-items-wrapper flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem
            name="Alao Idris"
            text="But really, I don't its risky"
            time="Yesterday"
            key={`chat-${chat}`}
            showChatOptions={(event) => _openChatMenu(event)}
          />
        ))}
      </div>
    </div>
  );
}

const iconStyles = {
  marginLeft: "1.5rem",
  cursor: "pointer",
};
