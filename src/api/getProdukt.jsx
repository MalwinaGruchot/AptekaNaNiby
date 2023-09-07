import { API_URL } from "./constants";

export const getProdukt = (id, setProductsList) => {
  fetch(API_URL + "/products/" + id)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      if (typeof setProductsList === "function") {
        setProductsList(data);
      }
    })
    .catch((err) => console.log(err));
};
