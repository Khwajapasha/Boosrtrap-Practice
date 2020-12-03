import React from 'react';
import { Alert } from "react-bootstrap";
export const  AlertVariantLink= () => {
    const variantLink = [
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
        {variantLink.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert with{" "}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
        ))}
      </div>
    );
}
 

