import React from "react";
import "./StatusComponent.css";
import StatusList from './StatusList'
import StatusArea from './StatusArea'

function StatusComponent({ closeStatus,chats }) {
  return(
    <div className="StatusComponent">
      <StatusList chats={chats} />
      <StatusArea close={closeStatus} />
    </div>
  );
}

export default StatusComponent;
