import React from 'react';
import { Card } from "react-bootstrap";
export const CardImageOverlay = () => {
    return (
      <div>
        <Card
          className="mt-2"
          style={{ width: "12rem",height: "18rem"}}
        >
          <Card.Img src="Assets/Rose.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title style={{ color: "black" }}>Card title</Card.Title>
            <Card.Text style={{ color: "black" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
};

