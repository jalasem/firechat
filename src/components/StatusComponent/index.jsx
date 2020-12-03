import React from "react";
import "./StatusComponent.css";

function StatusComponent({ closeStatus }) {
  return <div className="StatusComponent" onClick={closeStatus}></div>;
}

export default StatusComponent;
