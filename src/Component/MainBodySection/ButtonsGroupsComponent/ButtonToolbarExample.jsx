import React from "react";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
export const ButtonToolbarExample = () => {
  return (
    <React.Fragment>
      <div className="mt-2">
        <br />
        <span style={{float:"left"}}>
          === Combine sets of ButtonGroups into a ButtonToolbar for more complex
          components. ===
        </span>
        <br />
        <br />
        <ButtonToolbar>
          <ButtonGroup className="mr-2">
            <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Button>5</Button> <Button>6</Button> <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </React.Fragment>
  );
};
