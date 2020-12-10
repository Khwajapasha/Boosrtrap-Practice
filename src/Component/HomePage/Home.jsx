import React from "react";
import { ChatBoxLayout} from "../ChatBox/ChatBoxLayout";
import { MainBodySection } from "../MainBodySection/MainBodySection";
export const Home = () => {
  return (
    <div>
      <MainBodySection />
      
      <ChatBoxLayout/>
    </div>
  );
};
