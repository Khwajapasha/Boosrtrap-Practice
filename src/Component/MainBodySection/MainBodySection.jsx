import React from "react";
import { AllAccordions } from "./AccordionComponent/AllAccordions";
import { AllAlert } from "./AlertComponent/AllAlert";
import { AllBadges } from "./BadgesComponent/AllBadges";
import { AllBreadcrumb } from "./Breadcrumbs/AllBreadcrumb";
import {AllButtons} from "./ButtonComponent/AllButtons"
import {AllGroupsButton} from "./ButtonsGroupsComponent/AllGroupsButton"
export const MainBodySection = () => {
  return (
    <div>
      <AllAlert />
      <AllAccordions />
      <AllBadges />
      <AllBreadcrumb />
      <AllButtons />
      <AllGroupsButton />
    </div>
  );
};
