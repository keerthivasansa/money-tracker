import axios from "axios";

export const axiosClient = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});


export const CATEGORY_EMOJIS: { [x: string]: string } = {
  Food: "๐",
  Clothing: "๐",
  Bills: "๐งพ",
  Essential: "๐๏ธ",
  Other: "โ",
};

export const categories = Object.keys(CATEGORY_EMOJIS);

export const categoriesWithEmojis = categories.map(cat => cat + CATEGORY_EMOJIS[cat]);