import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { CardBasicExample } from "../CardsComponent/CardBasicExample";
import { CardHeaderAndFooter } from "../CardsComponent/CardHeaderAndFooter";
import { CardImageOverlay } from "../CardsComponent/CardImageOverlay";
export const TabBasicExample = () => {
  return (
    <div>
      <br />
      <h4 style={{ float: "left" }}>=== Basic Example Of Tab ===</h4>
      <br />
      <br />
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <CardBasicExample />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <CardImageOverlay />
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <CardHeaderAndFooter />
          </Tab>
          <Tab eventKey="dissable" title="Contact" disabled>
            <CardHeaderAndFooter />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
