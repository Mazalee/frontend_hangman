import React, { ReactNode } from "react";
interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="game-modal">
      <div className="modal-child">{children}</div>
    </div>
  );
};

export default Modal;
