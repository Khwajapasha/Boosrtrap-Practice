import React from "react";
import { ModalBasicExample } from "./ModalBasicExample";
import { ModalFunctionalClickable } from "./ModalFunctionalClickable";
import { ModalStaticBackdrop } from "./ModalStaticBackdrop";
import { ModalWithoutAnimation } from "./ModalWithoutAnimation";
import { ModalVerticallyCenter } from "./ModalVerticallyAlignCenter/ModalVerticallyCenter";
import { ModalWithGrid } from "./ModalWithGrid/ModalWithGrid";

export const AllModal = () => {
  return (
    <div>
      <ModalBasicExample />
      <ModalFunctionalClickable />
      <ModalStaticBackdrop />
      <ModalWithoutAnimation />
      <ModalVerticallyCenter />
      <ModalWithGrid />
    </div>
  );
};
