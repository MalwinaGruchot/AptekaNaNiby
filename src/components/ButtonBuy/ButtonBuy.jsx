import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import style from "./ButtonBuy.module.scss";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

export default function ButtonBuy({ product }) {
  const { setBasket } = useContext(AppContext);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setBasket((prev) => [...prev, product]);
      }}
      className={style.button}
    >
      <FontAwesomeIcon icon={faCartArrowDown} />
    </button>
  );
}
