import axios from "axios";
const instance = axios.create({
  baseURL: "https://react-yummyburger.firebaseio.com/",
});
export default instance;
