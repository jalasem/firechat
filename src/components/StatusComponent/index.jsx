import React from "react";
import "./StatusComponent.css";
import StatusList from './StatusList'
import StatusArea from './StatusArea'

function StatusComponent({ closeStatus }) {
  return(
    <div className="StatusComponent">
      <StatusList />
      <StatusArea close={closeStatus} />
    </div>
  );
}

export default StatusComponent;
