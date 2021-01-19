import React from "react";
import { MediaAlignment } from "./MediaAlignment";
import { MediaBasicExample } from "./MediaBasicExample";
import { MediaNesting } from "./MediaNesting";
export const AllMedia = () => {
  return (
    <div>
      <MediaBasicExample />
      <MediaNesting />
      <MediaAlignment />
    </div>
  );
};
