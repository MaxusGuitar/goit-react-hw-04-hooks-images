import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import style from "./styled.module.css";

const ImageGalleryItem = ({ p }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const { webformatURL, tags, id } = p;

  return (
    <li key={id} className={style.ImageGalleryItem}>
      <img
        onClick={toggleModal}
        className={style.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
      />
      {showModal && <Modal p={p} onClose={toggleModal} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func,
};
export default ImageGalleryItem;
