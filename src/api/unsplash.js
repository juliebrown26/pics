import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Powpi1uKQ5T975Ur_2mbLw_u6lQqBocqeV1rg_B4gCA"
  }
});
