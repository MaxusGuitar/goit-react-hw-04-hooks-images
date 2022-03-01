import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./components/Seacrhbar";
import ImageGallery from "./components/ImageGallery";
import Loading from "./components/Loading";
import LoadBtn from "./components/LoadBtn";
import getAPI from "./services/API";
import { toast } from "react-toastify";
import style from "./App.css";

const App = () => {
  const [pictureName, setPictureName] = useState("");
  const [picture, setPicture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (pictureName === "") {
      return;
    }
    if (page === 1) {
      setPicture([]);
    }
    setLoading(true);

    getAPI(pictureName, page).then((res) => {
      const picture = res.data.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => {
          return { id, tags, webformatURL, largeImageURL };
        }
      );

      if (picture.length === 0) {
        toast.error("There is no picture with that name!");
        setLoading(false);
        return;
      }

      setPicture((c) => ({
        ...c,
        ...picture,
      }));
      setLoading(false);
    });
  }, [pictureName, page]);

  //  const componentDidUpdate = (prewProps, prewState) => {
  //     if (prewState.pictureName !== this.state.pictureName) {
  //       this.setState({ picture: [] });
  //       this.searchPictures();
  //     }

  //     if (prewState.page !== this.state.page && this.state.page !== 1) {
  //       this.searchPictures();
  //     }
  //   }

  // const searchPictures = () => {
  //   getAPI(pictureName, page).then((res) => {
  //     const picture = res.data.hits.map(
  //       ({ id, tags, webformatURL, largeImageURL }) => {
  //         return { id, tags, webformatURL, largeImageURL };
  //       }
  //     );

  //     if (picture.length === 0) {
  //       setLoading(loading === "false");
  //       return toast.error("There is no picture with that name!");
  //     }

  //     setPicture((c) => ({
  //       ...c,
  //       ...picture,
  //     }));
  //     setLoading(loading === "false");
  //   });
  // };

  const handleFormSubmit = (pictureName) => {
    setPictureName(pictureName);
    setPage(1);
  };

  const loadMoreBtn = () => {
    setPage((pp) => pp + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {picture.length > 0 && <ImageGallery picture={picture} />}
      <ToastContainer autoClose={3000} />
      {loading ? (
        <Loading />
      ) : (
        picture.length > 0 &&
        picture.length % 12 === 0 && <LoadBtn more={loadMoreBtn} />
      )}
    </div>
  );
};

export default App;
