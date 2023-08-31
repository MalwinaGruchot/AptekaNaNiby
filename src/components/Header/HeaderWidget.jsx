import { Link } from "react-router-dom";
import "./HeaderWidget.scss";

export default function HeaderWidget() {
  return (
    <div className="header__widget">
      <div className="container header__container">
        <Link to="/" className="header__link">
          Rabaty do -25%
        </Link>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}
