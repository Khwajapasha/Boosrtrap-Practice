import React from "react";
import { Toast } from "react-bootstrap";
export const ToastBaiscExample = () => {
  return (
    <div>
      <br />
      <h4>=== Basic Example OF Toast ===</h4>
      <br />{" "}
      <Toast>
        <Toast.Header>
          <img src="" className="rounded mr-2 " alt="" />
          <strong className="mr-auto">bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>This is the basic example of toast</Toast.Body>
      </Toast>
    </div>
  );
};
