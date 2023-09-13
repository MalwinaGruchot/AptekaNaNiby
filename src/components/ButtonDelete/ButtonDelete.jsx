import styles from "./ButtonDelete.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

// eslint-disable-next-line react/prop-types
export default function ButtonDelete({ id }) {
  const { setBasket } = useContext(AppContext);
  const deteleProduct = (e) => {
    e.preventDefault();
    setBasket((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <button className={styles.button} onClick={deteleProduct}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
