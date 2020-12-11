import React, { useState } from "react";
import SimpleForm from "./SimpleForm";

export const ChatBoxLayout = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      {/*
      
       
      <div className="footer">Footer</div> */}
      <div className="chatbot">
        <div style={{ display: showChat ? "" : "none" }}>
          <SimpleForm style={{ width: "25rem " }} />
        </div>
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat ? (
            <button className="bot--btn" onClick={() => startChat()}>
              click to chat...{" "}
            </button>
          ) : (
            <button className="bot--btn" onClick={() => hideChat()}>
              click to hide...{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
