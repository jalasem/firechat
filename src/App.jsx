import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth, database } from "./utils/firebase";

import ChatArea from "./components/ChatArea";
import ChatList from "./components/ChatList";
import Menu from "./components/Menu";
import StatusComponent from "./components/StatusComponent";
import NewChat from "./components/NewChat";
import CloseIcon from "./components/icons/CloseIcon";

export default function App() {
  const [user, setUser] = useState(null);
  const [statusOpen, setStatusOpen] = useState(false);
  const [chats, setChats] = useState([1, 2, 3, 4, 5]);
  const [newChatOpen, setNewChatOpen] = useState(false);
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

  const handleNewChatOpen = () => setNewChatOpen(!newChatOpen);

  const showMenu = menu && menu.items && menu.items.length;

  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) setUser(currentUser);
    else setUser(null);
  });

  return !user ? (
    <AuthView />
  ) : (
    <div className="App">
      <NewChat
        currentUser={user}
        handleNewChatOpen={handleNewChatOpen}
        newChatOpen={newChatOpen}
      />
      <ChatList
        chats={chats}
        handleNewChatOpen={handleNewChatOpen}
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
        <StatusComponent
          closeStatus={() => setStatusOpen(false)}
          chats={chats}
        />
      )}
      <ToastContainer closeButton={CloseIcon} />
    </div>
  );
}

const AuthView = () => {
  const [accessType, setAccessType] = useState("login");
  const handleAuth = async (event) => {
    event.preventDefault();

    let { name, email, password } = event.target;
    name = name.value;
    email = email.value;
    password = password.value;

    let user;
    try {
      if (accessType === "login") {
        user = await auth.signInWithEmailAndPassword(email, password);
      } else {
        user = await auth.createUserWithEmailAndPassword(email, password);
      }
      console.log(user);

      if (user?.additionalUserInfo?.isNewUser) {
        database.child("users/" + user.user.uid).set({
          name,
          email,
        });
        toast("Welcome to firechat 🤗");
      } else {
        toast("Welcome back 🤗", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div className="AuthView">
      <h1 className="title">FireChat</h1>
      <form onSubmit={handleAuth}>
        {accessType === "signup" && (
          <input type="text" placeholder="Full name" name="name" required />
        )}
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button>{accessType === "login" ? "Login" : "Signup"}</button>
        {accessType === "login" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setAccessType("signup")}>Signup</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setAccessType("login")}>Login</span>
          </p>
        )}
      </form>
      <ToastContainer closeButton={CloseIcon} />
    </div>
  );
};
