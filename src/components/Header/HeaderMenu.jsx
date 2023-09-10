import { NavLink } from "react-router-dom";
import "./HeaderMenu.scss";

const links = [
  { title: "Promocje", url: "promocje" },
  { title: "Pielęgnacja", url: "pielęgnacja" },
  { title: "Środki opatrunkowe", url: "srodkiopatrunkowe" },
  { title: "Sprzęt medyczny", url: "sprzętmedyczny" },
];

export default function HeaderMenu() {
  return (
    <div className="header__menu">
      <div className="container header__container">
        <nav className="header__nav">
          <ul className="header__navList">
            {links.map(({ title, url }) => (
              <li className="header__item" key={url}>
                <NavLink className="header__navLink" to={`/${url}`}>
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
