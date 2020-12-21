import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CarouselBasicExample } from "./CarouselBasicExample";
export const AllCarousel = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div className="mt-2">
          <CarouselBasicExample />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Click to load Carousel</Button>
      </div>
    </React.Fragment>
  );
};
