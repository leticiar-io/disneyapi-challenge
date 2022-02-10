import axios from "axios";
//https://us-central1-labenu-apis.cloudfunctions.net/labenews
const api = axios.create({
  baseURL: "https://api.disneyapi.dev",
});

export { api };
