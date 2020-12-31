import React from "react";
import { ModalBasicExample } from "./ModalBasicExample";
import { ModalFunctionalClickable } from "./ModalFunctionalClickable";
import { ModalStaticBackdrop } from "./ModalStaticBackdrop";

export const AllModal = () => {
  return (
    <div>
      <ModalBasicExample />
      <ModalFunctionalClickable />
      <ModalStaticBackdrop />
    </div>
  );
};
