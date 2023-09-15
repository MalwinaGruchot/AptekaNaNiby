import { NavLink } from "react-router-dom";
import styles from "./LogoApp.module.scss";

export default function LogoApp() {
  return (
    <NavLink className={styles.link} to={`/`}>
      <div className={styles.logo}>
        Apteka<span className={styles.txtFirst}>Na</span>
        <p className={styles.txtSecend}>Niby</p>
      </div>
    </NavLink>
  );
}
