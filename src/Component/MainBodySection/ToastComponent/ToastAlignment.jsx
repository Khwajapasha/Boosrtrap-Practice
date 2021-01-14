import React from "react";
import { Toast } from "react-bootstrap";
export const ToastAlignment = () => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "relative",
        minHeight: "100px",
      }}
    >
      <br />
      <h4>=== Toast Alignment OR Placement ===</h4>
      <br />
      <p>
        Place toasts with custom CSS as you need them. The top right is often
        used for notifications, as is the top middle.
      </p>
      <br />
      <Toast
        style={{
          position: "absolute",
          top: 150,
          right: 0,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <br />
      <br />
      <br />
      <p>
        For systems that generate more notifications, consider using a wrapping
        element so they can easily stack.
      </p>
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "relative",
          minHeight: "200px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
          </Toast>
        </div>
      </div>
    </div>
  );
};
