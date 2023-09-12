/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import style from "./ButtonBuy.module.scss";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

// eslint-disable-next-line react/prop-types
export default function ButtonBuy({ product, removeDisabled, counter }) {
  const { basket, setBasket } = useContext(AppContext);

  const addProductToArray = (e) => {
    e.preventDefault();
    if (basket.some((el) => el.id === product.id)) {
      setBasket((prev) =>
        prev.map((el) =>
          el.id === product.id
            ? {
                ...el,
                order: el.order + counter,
                quantity: el.quantity - counter,
              }
            : el
        )
      );
    } else {
      setBasket((prev) => [
        ...prev,
        { ...product, order: counter, quantity: product.quantity - counter },
      ]);
    }
  };

  return (
    <button
      disabled={removeDisabled}
      onClick={addProductToArray}
      className={style.button}
    >
      <FontAwesomeIcon icon={faCartArrowDown} />
    </button>
  );
}
