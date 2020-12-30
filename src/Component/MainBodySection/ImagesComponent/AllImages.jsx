import React from "react";
import { ImagesBasicShapes } from "./ImagesBasicShapes";
import { ImagesFluid } from "./ImagesFluid";
export const AllImages = () => {
  return (
    <React.Fragment>
      <div>
        <ImagesBasicShapes />
        <ImagesFluid />
      </div>
    </React.Fragment>
  );
};
