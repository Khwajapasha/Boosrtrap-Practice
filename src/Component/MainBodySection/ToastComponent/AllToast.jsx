import React from "react";
import { ToastAlignment } from "./ToastAlignment";
import { ToastBaiscExample } from "./ToastBaiscExample";
import { ToastDismissable } from "./ToastDismissable";
import { ToastStacking } from "./ToastStacking";
export const AllToast = () => {
  return (
    <div>
      <ToastBaiscExample />
      <ToastDismissable />
      <ToastStacking />
      <ToastAlignment />
    </div>
  );
};
