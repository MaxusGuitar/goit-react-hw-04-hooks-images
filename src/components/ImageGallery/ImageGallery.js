import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import style from "./styled.module.css";

export default function ImageGallery({ picture }) {
  return (
    <ul className={style.ImageGallery}>
      {picture.length > 0 &&
        picture.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          );
        })}
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
