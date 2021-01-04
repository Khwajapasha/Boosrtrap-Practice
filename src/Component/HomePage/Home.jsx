import React from "react";
import { HeaderSection } from "../Header Section/HeaderSection";
import { MainBodySection } from "../MainBodySection/MainBodySection";
import { LeftNavigationSection } from "../LeftNavigationSection/LeftNavigationSection";
import NavigationBar from "./NavigationBar";
export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <HeaderSection />
      <LeftNavigationSection />
      <MainBodySection />
    </div>
  );
};
