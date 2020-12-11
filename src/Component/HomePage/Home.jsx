import React from "react";
import { HeaderSection } from "../Header Section/HeaderSection";
import { MainBodySection } from "../MainBodySection/MainBodySection";
import {LeftNavigationSection} from "../LeftNavigationSection/LeftNavigationSection"
export const Home = () => {
  return (
    <div>
      <HeaderSection/>
      <LeftNavigationSection/>
      <MainBodySection />
      
    </div>
  );
};
