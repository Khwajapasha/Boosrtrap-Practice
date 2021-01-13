import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { CardBasicExample } from "../CardsComponent/CardBasicExample";
export const BasicExampleOfTab = () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <CardBasicExample />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          {/* <Sonnet /> */}
        </Tab>
      </Tabs>
    </div>
  );
};
