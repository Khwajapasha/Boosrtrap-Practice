import React from "react";
import { ButtonBasicExample } from "./ButtonBasicExample";
import { ButtonOutline } from "./ButtonOutline";
import { TextButton } from "./TextButton";
export const AllButton = () => {
  return (
    <div>
      <ButtonBasicExample />
      <TextButton />
      <ButtonOutline />
    </div>
  );
};
