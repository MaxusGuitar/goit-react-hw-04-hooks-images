import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "24079663-849aadf309a059b421030ae2f";

const getAPI = (pictureName, page) => {
  return axios.get(
    `${BASE_URL}/?q=${pictureName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
export default getAPI;
