import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FigureImage } from "./FigureImage";
import { ImagesBasicShapes } from "./ImagesBasicShapes";
import { ImagesFluid } from "./ImagesFluid";
export const AllImages = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ImagesBasicShapes />
          <ImagesFluid />
          <FigureImage />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Images</Button>
      </div>
    </React.Fragment>
  );
};
