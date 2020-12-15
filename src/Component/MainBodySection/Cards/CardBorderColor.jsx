import React from "react";
import { Card, Row } from "react-bootstrap";
export const CardBorderColor = () => {
  return (
    <div className="mt-2">
      <Row>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>Primary Card Border </Card.Text>
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: "18rem", left: "2px" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="success" style={{ width: "18rem", left: "2px" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Border</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="danger" style={{ width: "18rem", left: "2px" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="warning" style={{ width: "18rem", left: "2px" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: "18rem", left: "2px" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="dark" style={{ width: "18rem", left: "2px" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="light" style={{ width: "18rem", left: "2px" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Row>
    </div>
  );
};
