import Axios from "axios";

export const axios = Axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:7001/"
      : "http://api.soulda.me/"
});
