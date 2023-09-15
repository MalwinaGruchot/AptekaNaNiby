import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

const links = [
  { title: "Promocje", url: "promocje" },
  { title: "Pielęgnacja", url: "pielęgnacja" },
  { title: "Środki opatrunkowe", url: "srodkiopatrunkowe" },
  { title: "Sprzęt medyczny", url: "sprzętmedyczny" },
];

export default function HeaderMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map(({ title, url }) => (
              <li className={styles.item} key={url}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : `${styles.navLink}`
                  }
                  to={`/${url}`}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
