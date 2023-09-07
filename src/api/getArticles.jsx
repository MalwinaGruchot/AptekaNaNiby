import { API_URL } from "./constants";

export const getArticles = (setArticlesList) => {
  fetch(API_URL + "/articles")
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      if (typeof setArticlesList === "function") {
        setArticlesList(data);
      }
    })
    .catch((err) => console.log(err));
};
