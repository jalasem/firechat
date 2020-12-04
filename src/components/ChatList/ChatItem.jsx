import React from "react";
import DownCaret from "../icons/DownCaret";

export default function ChatItem({ name, text, time, showChatOptions }) {
  return (
    <div
      className="ChatItem StatusView"
      onContextMenu={(event) => showChatOptions(event)}
    >
      <img src="/images/jalasem.jpg" alt="Jalasem" />
      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-1 flex-col">
          <span className="name">{name}</span>
          <span className="message">{text}</span>
        </div>
        {time && (
          <div className="flex flex-col items-end">
            <span className="time">Yesterday</span>
            <DownCaret
              style={{ width: "1rem" }}
              onClick={(event) => showChatOptions(event)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
