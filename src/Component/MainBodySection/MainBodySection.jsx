import React from "react";
import { AllAccordions } from "./AccordionComponent/AllAccordions";

import { AllAlert } from "./AlertComponent/AllAlert";

export const MainBodySection = () => {
  return (
    <div>
      <AllAlert />
      <AllAccordions />
    </div>
  );
};
