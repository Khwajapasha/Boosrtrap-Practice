import React from "react";
import { ToastBaiscExample } from "./ToastBaiscExample";
import { ToastDismissable } from "./ToastDismissable";
import { ToastStacking } from "./ToastStacking";
export const AllToast = () => {
  return (
    <div>
      <ToastBaiscExample />
      <ToastDismissable />
      <ToastStacking />
    </div>
  );
};
