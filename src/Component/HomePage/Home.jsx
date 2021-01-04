import React from "react";
import { HeaderSection } from "../Header Section/HeaderSection";
import { MainBodySection } from "../MainBodySection/MainBodySection";
import { LeftNavigationSection } from "../LeftNavigationSection/LeftNavigationSection";
import NavigationBar from "./NavigationBar";
import { AddMultipleDivOnClick } from "../AddMultipleDivOnClick";
export const Home = () => {
  return (
    <div>
      <AddMultipleDivOnClick />
      <NavigationBar />
      <HeaderSection />
      <LeftNavigationSection />
      <MainBodySection />
    </div>
  );
};
