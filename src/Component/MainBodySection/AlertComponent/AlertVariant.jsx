import React from "react";
import { Alert } from "react-bootstrap";
import "./AllAlert.css";
export const AlertVariant = () => {
  const variant = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  return (
    <div>
      {variant.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      ;
    </div>
  );
};
