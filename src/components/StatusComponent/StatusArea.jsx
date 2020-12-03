import React from "react";

import CloseIcon from "../icons/CloseIcon";
import SeeIcon from "../icons/SeeIcon"

import "./StatusArea.css";

function StatusArea({ close }) {
  return (
    <div className="Statusarea">
      <CloseIcon onClick={close} className="closeIcon" />
      <div className="updates">
        <h2>View your updates</h2>
        <div className="my-statuses">
          <div className="my-status">
            <img src="/images/status.jpg" alt="see icon" /> 
            <SeeIcon />
          </div>
          <div className="my-status">
            <img src="/images/status.jpg" alt="see icon" />
            <SeeIcon />
          </div>
          <div className="my-status">
            <img src="/images/status.jpg" alt="see icon" /> 
            <span><SeeIcon /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusArea;
