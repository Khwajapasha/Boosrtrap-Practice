import React from "react";
import { AllAccordions } from "./AccordionComponent/AllAccordions";
import { AllAlert } from "./AlertComponent/AllAlert";
import { AllBadges } from "./BadgesComponent/AllBadges";
import { AllBreadcrumb } from "./Breadcrumbs/AllBreadcrumb";
import {AllButtons} from "./ButtonComponent/AllButtons"
import "../ChatBox/ChatBoxLayout.css";
export const MainBodySection = () => {
  return (
    <div className="content">
      <AllAlert />
      <AllAccordions />
      <AllBadges />
      <AllBreadcrumb />
      <AllButtons />
      <div>
        <div style={{ padding: "20px" }}>
          <h1>Content of my application will go here.....</h1>
          <p>
            Sample content to fill the gap as much as possible. Sample content
            to fill the gap as much as possible. Sample content to fill the gap
            as much as possible.Sample content to fill the gap as much as
            possible.
          </p>
          <p>
            More content to fill the available area of the main contect. More
            content to fill the available area of the main contect. More content
            to fill the available area of the main contect.More content to fill
            the available area of the main contect.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
