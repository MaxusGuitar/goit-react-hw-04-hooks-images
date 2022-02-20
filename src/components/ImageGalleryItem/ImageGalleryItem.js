import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import style from "./styled.module.css";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <li className={style.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={style.ImageGalleryItem_image}
          src={webformatURL}
          alt={tags}
        />
        {showModal && (
          <Modal photo={largeImageURL} tags={tags} onClose={this.toggleModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func,
};
