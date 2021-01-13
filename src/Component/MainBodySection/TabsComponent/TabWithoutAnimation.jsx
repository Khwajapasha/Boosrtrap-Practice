import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { CardBasicExample } from "../CardsComponent/CardBasicExample";
import { CardImageOverlay } from "../CardsComponent/CardImageOverlay";
export const TabWithoutAnimation = () => {
  return (
    <div>
      <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="Home">
          <CardBasicExample />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <CardImageOverlay />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
    </div>
  );
};
