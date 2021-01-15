import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastAlignment } from "./ToastAlignment";
import { ToastAutoHide } from "./ToastAutoHide";
import { ToastBaiscExample } from "./ToastBaiscExample";
import { ToastDismissable } from "./ToastDismissable";
import { ToastStacking } from "./ToastStacking";
export const AllToast = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ToastBaiscExample />
          <ToastDismissable />
          <ToastStacking />
          <ToastAlignment />
          <ToastAutoHide />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load all Toast</Button>
      </div>
    </React.Fragment>
  );
};
