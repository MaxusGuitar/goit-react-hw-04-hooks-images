import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Seacrhbar";
import ImageGallery from "./components/ImageGallery";
import Loading from "./components/Loading";
import LoadBtn from "./components/LoadBtn";
import getAPI from "./services/API";
import { toast } from "react-toastify";
import style from "./App.css";

class App extends Component {
  state = {
    pictureName: "",
    picture: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prewProps, prewState) {
    if (prewState.pictureName !== this.state.pictureName) {
      this.setState({ picture: [] });
      this.searchPictures();
    }

    if (prewState.page !== this.state.page && this.state.page !== 1) {
      this.searchPictures();
    }
  }

  searchPictures = () => {
    const { pictureName, page } = this.state;

    this.setState({ loading: true });

    getAPI(pictureName, page).then((res) => {
      const picture = res.data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => {
          return { id, tags, webformatURL, largeImageURL };
        }
      );

      if (picture.length === 0) {
        this.setState({ loading: false });
        return toast.error("There is no picture with that name!");
      }

      this.setState((prevState) => ({
        picture: [...prevState.picture, ...picture],
      }));
      this.setState({ loading: false });
    });
  };

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  loadMoreBtn = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { loading, picture } = this.state;
    const { handleFormSubmit, loadMoreBtn } = this;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery picture={picture} />
        <ToastContainer autoClose={3000} />
        {loading ? (
          <Loading />
        ) : (
          picture.length > 0 &&
          picture.length % 12 === 0 && <LoadBtn more={loadMoreBtn} />
        )}
      </div>
    );
  }
}

export default App;
