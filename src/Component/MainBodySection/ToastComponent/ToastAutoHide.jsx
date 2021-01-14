import React, { useState } from "react";
import { Row, Col, Toast, Button } from "react-bootstrap";
export const ToastAutoHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <br />
      <p>
        A Toast can also automatically hide after X milliseconds. For that, use
        the autohide prop in combination with delay the prop to sepecify the
        delay. But be aware, that it will only trigger the onClose function, you
        have to set manually the show property.
      </p>
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
    </div>
  );
};
