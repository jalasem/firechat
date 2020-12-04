import React, { useState, useEffect } from "react";

import "./NewChat.css";

import BackArrow from "../icons/BackArrow";
import ChatItem from "../ChatList/ChatItem";
import { database } from "../../utils/firebase";

const NewChat = ({ handleNewChatOpen, newChatOpen, currentUser }) => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    (async () => {
      if (newChatOpen) {
        const snapshot = await database.child("users").once("value");
        const usersObj = snapshot.val();

        const usersArray = Object.keys(usersObj).map((key) => ({
          key,
          ...usersObj[key],
        }));

        setUsers(usersArray);
      }
    })();
  }, [newChatOpen]);

  return (
    <div
      className="NewChat"
      style={newChatOpen ? { left: "0" } : { left: "-35vw" }}
    >
      <nav>
        <div className=" header flex items-center">
          <BackArrow
            onClick={handleNewChatOpen}
            style={{ cursor: "pointer" }}
          />
          <span className="title">New chat</span>
        </div>
      </nav>
      {users &&
        users.map((user) => (
          <ChatItem
            key={`new-chat_${user.key}`}
            name={user.name}
            text={user.statusText}
          />
        ))}
    </div>
  );
};

export default NewChat;
