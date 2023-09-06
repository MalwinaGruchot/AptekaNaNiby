import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import style from "./ButtonBuy.module.scss";

export default function ButtonBuy() {
  return (
    <button className={style.button}>
      <FontAwesomeIcon icon={faCartArrowDown} />
    </button>
  );
}
