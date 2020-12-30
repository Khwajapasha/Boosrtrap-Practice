import React from "react";
import { Figure } from "react-bootstrap";
export const FigureImage = () => {
  return (
    <div>
      <br />
      === By Using Figure.Image Tag ===
      <br />
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="Assets/RoyalRedFlower.jpg"
        />
        <Figure.Caption></Figure.Caption>
      </Figure>
    </div>
  );
};
