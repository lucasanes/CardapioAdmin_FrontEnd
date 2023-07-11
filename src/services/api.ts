import axios from "axios";

export const api = axios.create({
  //baseURL: "http://localhost:8080",
  baseURL: "https://cardapiobackend.up.railway.app/",
});

api.interceptors.response.use(
  function (response) {

    return response;
  }
)