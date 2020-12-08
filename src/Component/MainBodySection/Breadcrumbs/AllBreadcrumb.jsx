import React,{useState} from "react";
import { BreadCrumbsComponent } from "./BreadCrumbsComponent";
import { Button } from "react-bootstrap";
export const AllBreadcrumb = () => {
  const [show,setShow]=useState(false)
  return (
    <React.Fragment>
      {show && (
        <div>
          <BreadCrumbsComponent />
        </div>
      )}
      <div>
        <Button onClick={() => setShow(!show)}>Click To Load Breadcrumb</Button>
      </div>
    </React.Fragment>
  );
};
