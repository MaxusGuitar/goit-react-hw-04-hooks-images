import React, { Component } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import style from "./modal.module.css";

const modalRoot = document.querySelector("#modal__root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === `Escape`) {
      this.props.onClose();
    }
  };

  ahndleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { photo, tags } = this.props;

    return createPortal(
      <div className={style.Overlay} onClick={this.ahndleBackdropClick}>
        <div className={style.Modal}>
          <img src={photo} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: propTypes.func,
};

export default Modal;
