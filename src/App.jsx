import React, { useState } from "react";
import "./App.css";
import ChatArea from "./components/ChatArea";
import ChatList from "./components/ChatList";
import Menu from "./components/Menu";
import StatusComponent from "./components/StatusComponent";

export default function App() {
  const [statusOpen, setStatusOpen] = useState(false);
  const [chats, setChats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);
  const [menu, setMenu] = useState({
    items: [],
    style: {},
  });

  const closeMenu = () => {
    setMenu((menu) => ({
      items: [],
      style: {},
    }));
  };

  const showMenu = menu && menu.items && menu.items.length;

  return (
    <div className="App">
      <ChatList
        chats={chats}
        openMenu={(items, style) => setMenu({ items, style })}
        openStatus={() => setStatusOpen(true)}
      />
      <ChatArea />
      {showMenu && (
        <Menu
          closeMenu={() => closeMenu()}
          items={menu.items}
          style={menu.style}
        />
      )}
      {statusOpen && (
        <StatusComponent closeStatus={() => setStatusOpen(false)} />
      )}
    </div>
  );
}
