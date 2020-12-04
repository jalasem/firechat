import React from "react";

import CloseIcon from "../icons/CloseIcon";
import SeeIcon from "../icons/SeeIcon"

import "./StatusArea.css";

function StatusArea({ close }) {
  return (
    <div className="Statusarea">
      <CloseIcon onClick={close} className="closeIcon" />
      <div className="updates">
        <p>View your updates</p>
        <div className="my-statuses">
          <div className="my-status">
            <img src="/images/status.jpg" alt="see icon"  /> 
            <span><SeeIcon /> 34</span>
            <small> yesterday at 7:49PM</small>
          </div>
          <div className="my-status">
            <img src="/images/status.jpg" alt="see icon" />
            <span><SeeIcon /> 54</span>
            <small> yesterday at 7:49PM</small>
          </div>
          <div className="my-status">
            <img src="/images/status.jpg" alt="see icon" /> 
            <span><SeeIcon /> 4</span>
             <small> yesterday at 7:49PM</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusArea;
