import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const BreadCrumbsComponent = (props) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
