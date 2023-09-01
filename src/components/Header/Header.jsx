import "./Header.scss";
import LogoApp from "../LogoApp/LogoApp";
import HeaderWidget from "./HeaderWidget";
import HeaderForm from "./HeaderForm";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="header">
      <HeaderWidget />
      <div className="header__serch">
        <div className="container header__container">
          <LogoApp />
          <div className="header__formWrapper">
            <HeaderForm />
          </div>

          <button className="header__btnIcon">
            <i className="fa-solid fa-cart-shopping"></i>Koszyk
          </button>
        </div>
      </div>
      <HeaderMenu />
    </header>
  );
}
