import style from "./ProduktLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ProduktLink({ product }) {
  return (
    <div className={style.product}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={product.url} alt={product.name} />
      </div>
      <h3 className={style.title}>{product.name}</h3>
      <h3 className={style.price}>{product.price.toFixed(2)} zł.</h3>
      <button>
        <FontAwesomeIcon icon={faCartArrowDown} />
      </button>
      <button>
        <FontAwesomeIcon icon={faCartArrowDown} />
      </button>
    </div>
  );
}
