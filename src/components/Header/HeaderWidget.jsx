import { Link } from "react-router-dom";
import styles from "./HeaderWidget.module.scss";
import { useState } from "react";

export default function HeaderWidget() {
  const [style, setStyle] = useState({});

  return (
    <div style={style} className={styles.widget}>
      <div className={styles.container}>
        <Link to="/promocje" className={styles.link}>
          Rabaty do -25%
        </Link>
        <i
          onClick={() => setStyle({ display: "none" })}
          className="fa-solid fa-xmark"
        ></i>
      </div>
    </div>
  );
}
