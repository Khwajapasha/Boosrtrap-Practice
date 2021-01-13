import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { CardBasicExample } from "../CardsComponent/CardBasicExample";
import { CardImageOverlay } from "../CardsComponent/CardImageOverlay";

export const TabControlled = () => {
  const [key, setKey] = useState("home");

  return (
    <div>
      <br />
      <h4 style={{ float: "left" }}>=== Controled Tab Using useState ===</h4>
      <br />
      <br />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
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
