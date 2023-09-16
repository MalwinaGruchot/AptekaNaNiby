import { useNavigate } from "react-router-dom";
import styles from "./HeaderForm.module.scss";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function HeaderForm() {
  const { param, setParam } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/wyszukaj");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="serch"
        type="text"
        className={styles.input}
        placeholder="Wyszukaj..."
        value={param}
        onChange={(e) => setParam(e.target.value)}
      ></input>
      <button className={styles.button} type="submit">
        <FontAwesomeIcon className={styles.fasolid} icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
