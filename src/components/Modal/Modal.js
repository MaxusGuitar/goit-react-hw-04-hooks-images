import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import style from "./modal.module.css";

const modalRoot = document.querySelector("#modal__root");

function Modal({ onClose, a }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === `Escape`) {
      onClose();
    }
  };

  const ahndleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const { photo, tags } = a;

  return createPortal(
    <div className={style.Overlay} onClick={ahndleBackdropClick}>
      <div className={style.Modal}>
        <img src={photo} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: propTypes.func,
};

export default Modal;
