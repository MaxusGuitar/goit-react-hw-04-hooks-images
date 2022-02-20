import React, { Component } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import style from "./styled.module.css";
import { ImSearch } from "react-icons/im";

class Searchbar extends Component {
  state = {
    pictureName: "",
  };

  handleNameChange = (e) => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.pictureName.trim() === "") {
      //trim() - delete spaces
      return toast.warn("Please enter the picture name!");
    }

    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: "" });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={style.SearchForm}>
          <input
            className={style.SearchForm_input}
            type="text"
            name="pictureName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.pictureName}
            onChange={this.handleNameChange}
          />
          <button type="submit" className={style.SearchForm_button}>
            <ImSearch />
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};

export default Searchbar;
