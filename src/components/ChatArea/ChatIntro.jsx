import React from "react";
import LaptopIcon from "../icons/LaptopIcon";

import "./ChatIntro.css";

export default function ChatIntro() {
  return (
    <div className="ChatIntro">
      <img src="/images/intro-connection.jpg" alt="Connect with Whatsapp" />
      <h1 className="title">Keep your phone connected</h1>
      <p>
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect your phone to Wi-Fi.
      </p>

      <span className="divider" />

      <p className="flex text-center items-center justify-center">
        <LaptopIcon style={{ marginRight: "0.5rem" }} />
        <span>
          Whatsapp is available on Mac.{" "}
          <a
            href="https://www.whatsapp.com/download"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Get it here
          </a>
        </span>
      </p>
    </div>
  );
}
