import "./Header.scss";
import LogoApp from "../LogoApp/LogoApp";
import HeaderWidget from "./HeaderWidget";
import HeaderForm from "./HeaderForm";
import HeaderMenu from "./HeaderMenu";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderWidget />
      <header className="header">
        <div className="header__serch">
          <div className="container header__container">
            <LogoApp />
            <div className="header__formWrapper">
              <HeaderForm />
            </div>

            <NavLink to="/basket" className="header__btnIcon">
              <i className="fa-solid fa-cart-shopping"></i>Koszyk
            </NavLink>
          </div>
        </div>
        <HeaderMenu />
      </header>
    </>
  );
}
