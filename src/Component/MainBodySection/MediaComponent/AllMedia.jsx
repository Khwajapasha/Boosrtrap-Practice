import React from "react";
import { Button } from "react-bootstrap";
import { MediaAlignment } from "./MediaAlignment";
import { MediaASList } from "./MediaASList";
import { MediaBasicExample } from "./MediaBasicExample";
import { MediaNesting } from "./MediaNesting";
import { MediaOrdered } from "./MediaOrdered";
export const AllMedia = () => {
  return (
    <React.Fragment>
      <div>
        <MediaBasicExample />
        <MediaNesting />
        <MediaAlignment />
        <MediaOrdered />
        <MediaASList />
      </div>
      <div>
        <Button>Load All Media</Button>
      </div>
    </React.Fragment>
  );
};
