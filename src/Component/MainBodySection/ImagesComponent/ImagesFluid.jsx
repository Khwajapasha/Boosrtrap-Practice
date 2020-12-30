import React from "react";
import { Image } from "react-bootstrap";
export const ImagesFluid = () => {
  return (
    <div className="mt-2">
      <Image
        src="Assets/Colorfull.webp"
        fluid
        style={{ height: "20rem", width: "80%" }}
      />
    </div>
  );
};
