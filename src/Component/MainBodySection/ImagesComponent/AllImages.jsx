import React from "react";
import { FigureImage } from "./FigureImage";
import { ImagesBasicShapes } from "./ImagesBasicShapes";
import { ImagesFluid } from "./ImagesFluid";
export const AllImages = () => {
  return (
    <React.Fragment>
      <div>
        <ImagesBasicShapes />
        <ImagesFluid />
        <FigureImage />
      </div>
    </React.Fragment>
  );
};
