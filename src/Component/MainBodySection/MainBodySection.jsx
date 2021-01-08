import React from "react";
import { AllAccordions } from "./AccordionComponent/AllAccordions";
import { AllAlert } from "./AlertComponent/AllAlert";
import { AllBadges } from "./BadgesComponent/AllBadges";
import { AllBreadcrumb } from "./BreadcrumbsComponent/AllBreadcrumb";
import { AllButtons } from "./ButtonComponent/AllButtons";
import { AllGroupsButton } from "./ButtonsGroupsComponent/AllGroupsButton";
import { AllCards } from "./CardsComponent/AllCards";
import { AllCarousel } from "./CarouselsComponent/AllCarousel";
import { AllDropDown } from "./DropDownComponent/AllDropDown";
import { AllForms } from "./FormComponent/AllForms";
import { AllInputGroups } from "./InputGroupComponent/AllInputGroups";
import { AllImages } from "./ImagesComponent/AllImages";
import { AllListGroup } from "./ListGroupsComponent/AllListGroup";
import { AllModal } from "./ModalComponent/AllModal";
import { AllNavs } from "./NavsComponent/AllNavs";
import { AllNavbar } from "./NavbarComponent/AllNavbar";
import { AllOverlay } from "./OverlayComponent/AllOverlay";
import { AllPopover } from "./PopoverComponent/AllPopover";
export const MainBodySection = () => {
  return (
    <div>
      <AllAlert />
      <AllAccordions />
      <AllBadges />
      <AllBreadcrumb />
      <AllButtons />
      <AllGroupsButton />
      <AllCards />
      <AllCarousel />
      <AllDropDown />
      <AllForms />
      <AllInputGroups />
      <AllImages />
      <AllListGroup />
      <AllModal />
      <AllNavs />
      <AllNavbar />
      <AllOverlay />
      <AllPopover />
    </div>
  );
};
