import styles from "./Header.module.scss";
import LogoApp from "../LogoApp/LogoApp";
import HeaderWidget from "./HeaderWidget";
import HeaderForm from "./HeaderForm";
import HeaderMenu from "./HeaderMenu";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { basket } = useContext(AppContext);
  return (
    <>
      <HeaderWidget />
      <header className={styles.header}>
        <div className={styles.serch}>
          <div className={styles.container}>
            <LogoApp />
            <div className={styles.formWrapper}>
              <HeaderForm />
            </div>

            <NavLink to="/basket" className={styles.btnIcon}>
              {basket.length > 0 ? (
                <div className={styles.number}>{basket.length}</div>
              ) : null}
              <FontAwesomeIcon className={styles.cart} icon={faCartShopping} />
              Koszyk
            </NavLink>
          </div>
        </div>
        <HeaderMenu />
      </header>
    </>
  );
}
