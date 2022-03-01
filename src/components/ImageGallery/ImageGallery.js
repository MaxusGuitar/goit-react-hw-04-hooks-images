import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import style from "./styled.module.css";

export default function ImageGallery({ picture }) {
  return (
    <ul className={style.ImageGallery}>
      {picture.length > 0 &&
        picture.map((p) => <ImageGalleryItem key={p.id} p={p} />)}
    </ul>
  );
}

ImageGallery.propTypes = {
  picture: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
    })
  ),
};
