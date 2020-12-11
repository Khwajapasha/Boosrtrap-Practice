import React from "react";
import { ChatBoxLayout} from "../ChatBox/ChatBoxLayout";
import { HeaderSection } from "../Header Section/HeaderSection";
import { MainBodySection } from "../MainBodySection/MainBodySection";
import {LeftNavigationSection} from "../LeftNavigationSection/LeftNavigationSection"
export const Home = () => {
  return (
    <div>
      <HeaderSection/>
      <LeftNavigationSection/>
      <MainBodySection />
      <ChatBoxLayout/>
    </div>
  );
};
