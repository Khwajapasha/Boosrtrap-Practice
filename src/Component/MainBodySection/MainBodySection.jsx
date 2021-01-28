import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
import { AllPagination } from "./PaginationComponent/AllPagination";
import { AllProgressBar } from "./ProgressBarComponent/AllProgressBar";
import { AllSpinners } from "./SpinnersComponent/AllSpinners";
import { AllTables } from "./TableComponent/AllTables";
import { AllTabs } from "./TabsComponent/AllTabs";
import { AllToast } from "./ToastComponent/AllToast";
import { AllGrid } from "./GridSystemComponent/AllGrid";
import { AllMedia } from "./MediaComponent/AllMedia";
export const MainBodySection = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div>
        <br />
        <h1>Implemented All Bootstrap Component</h1>
        <br />
      </div>
      {show && (
        <div>
          {" "}
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
          <AllPagination />
          <AllProgressBar />
          <AllSpinners />
          <AllTables />
          <AllTabs />
          <AllToast />
          <AllGrid />
          <AllMedia />
        </div>
      )}

      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>
          Click To Load All Bootstrap Component
        </Button>
      </div>
    </React.Fragment>
  );
};
