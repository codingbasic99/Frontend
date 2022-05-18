import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Content-Type": "application/json",
  },
});

const httpFile = axios.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export { http, httpFile };
