import React, { useState } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import style from "./styled.module.css";
import { ImSearch } from "react-icons/im";

function Searchbar({ onSubmit }) {
  const [pictureName, setPictureName] = useState("");

  const handleNameChange = (e) => {
    setPictureName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (pictureName.trim() === "") {
      //trim() - delete spaces
      return toast.warn("Please enter the picture name!");
    }

    onSubmit(pictureName);
    setPictureName("");
  };

  return (
    <header className={style.Searchbar}>
      <form onSubmit={handleSubmit} className={style.SearchForm}>
        <input
          className={style.SearchForm_input}
          type="text"
          name="pictureName"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={pictureName}
          onChange={handleNameChange}
        />
        <button type="submit" className={style.SearchForm_button}>
          <ImSearch />
        </button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};

export default Searchbar;
