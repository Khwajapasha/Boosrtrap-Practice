import React from 'react';
import {Carousel} from "react-bootstrap"
export const CarouselIndividualInterval = () => {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="Assets/Sample2.jpg"
              alt="First slide"
              style={{ width: "640px", height: "400px" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="Assets/Sample3.jpg"
              alt="Third slide"
              style={{ width: "640px", height: "400px" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            >
            <img
              className="d-block w-100"
              src="Assets/Sample1.jpg"
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

