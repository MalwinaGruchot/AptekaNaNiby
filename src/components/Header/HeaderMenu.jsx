import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import HeaderForm from "./HeaderForm";
import { useState } from "react";

const links = [
  { title: "Promocje", url: "promocje" },
  { title: "Pielęgnacja", url: "pielęgnacja" },
  { title: "Środki opatrunkowe", url: "srodkiopatrunkowe" },
  { title: "Sprzęt medyczny", url: "sprzętmedyczny" },
];

export default function HeaderMenu() {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className={styles.mobileBar}>
        <div className={styles.container}>
          <div className={styles.mobile}>
            <div className={styles.wrapperform}>
              <HeaderForm />
            </div>
            {isActive ? (
              <FontAwesomeIcon
                onClick={handleClick}
                className={styles.fabar}
                icon={faBars}
              />
            ) : (
              <FontAwesomeIcon
                onClick={handleClick}
                className={styles.fabar}
                icon={faXmark}
              />
            )}
          </div>
        </div>
      </div>
      {isActive ? null : (
        <div className={styles.menuMobile}>
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
      )}
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
    </>
  );
}
