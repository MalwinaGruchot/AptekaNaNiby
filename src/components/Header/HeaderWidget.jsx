import { Link } from "react-router-dom";
import "./HeaderWidget.scss";
import { useState } from "react";

export default function HeaderWidget() {
  const [style, setStyle] = useState({});

  return (
    <div style={style} className="header__widget">
      <div className="container header__container">
        <Link to="/promocje" className="header__link">
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
