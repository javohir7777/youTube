import axios from "axios";

export const requies = axios.create({
  baseURL: `https://youtube-v31.p.rapidapi.com/`,
  params: {
    q: "music",
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": "f399c28c01mshbc2264a15764dcbp112910jsn961c77f286b9",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
  timeout: 10000,
});
