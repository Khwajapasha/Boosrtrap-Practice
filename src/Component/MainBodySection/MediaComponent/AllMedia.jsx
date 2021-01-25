import React from "react";
import { MediaAlignment } from "./MediaAlignment";
import { MediaASList } from "./MediaASList";
import { MediaBasicExample } from "./MediaBasicExample";
import { MediaNesting } from "./MediaNesting";
import { MediaOrdered } from "./MediaOrdered";
export const AllMedia = () => {
  return (
    <div>
      <MediaBasicExample />
      <MediaNesting />
      <MediaAlignment />
      <MediaOrdered />
      <MediaASList />
    </div>
  );
};
