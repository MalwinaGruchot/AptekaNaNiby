import { API_URL } from "./constants";

export const getArticle = (id, setArticle) => {
  fetch(API_URL + "/articles/" + id)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      if (typeof setArticle === "function") {
        setArticle(data);
      }
    })
    .catch((err) => console.log(err));
};
