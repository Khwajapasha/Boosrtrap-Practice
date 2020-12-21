import React,{useState} from 'react';
import {Carousel} from "react-bootstrap"

export const ControlledCarousel = () => {
    const [index,setIndex]=useState(0)
   const handleSelect = (selectedIndex) => {
     setIndex(selectedIndex);
   };
    return (
      <div className="mt-2">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Assets/Sample1.jpg"
              alt="First slide"
              style={{ width: "640px", height: "400px" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Assets/Sample3.jpg"
              alt="Second slide"
              style={{ width: "640px", height: "400px" }}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Assets/Sample2.jpg"
              alt="Third slide"
              style={{ width: "640px", height: "400px" }}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};
