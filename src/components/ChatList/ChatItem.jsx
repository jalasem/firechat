import React from "react";
import DownCaret from "../icons/DownCaret";

export default function ChatItem() {
  return (
    <div className="ChatItem">
      <img src="/images/jalasem.jpg" alt="Jalasem" />
      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-1 flex-col">
          <span className="name">Alao Idris</span>
          <span className="message">But really, I don't its risky</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="time">Yesterday</span>
          <DownCaret style={{ width: "1rem" }} />
        </div>
      </div>
    </div>
  );
}
