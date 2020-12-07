import React from "react";
import { AllAccordions } from "./AccordionComponent/AllAccordions";
import { AllAlert } from "./AlertComponent/AllAlert";
import { AllBadges } from "./BadgesComponent/AllBadges";

export const MainBodySection = () => {
  return (
    <div>
      <AllAlert />
      <AllAccordions />
      <AllBadges/>
    </div>
  );
};
