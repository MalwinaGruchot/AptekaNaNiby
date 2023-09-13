import "./Header.scss";
import LogoApp from "../LogoApp/LogoApp";
import HeaderWidget from "./HeaderWidget";
import HeaderForm from "./HeaderForm";
import HeaderMenu from "./HeaderMenu";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

export default function Header() {
  const { basket } = useContext(AppContext);
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
              {basket.length > 0 ? (
                <div className="header__number">{basket.length}</div>
              ) : null}
              <i className="fa-solid fa-cart-shopping"></i>Koszyk
            </NavLink>
          </div>
        </div>
        <HeaderMenu />
      </header>
    </>
  );
}
