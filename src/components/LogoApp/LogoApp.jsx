import { NavLink } from "react-router-dom";
import "./LogoApp.scss";

export default function LogoApp() {
  return (
    <NavLink className="logo__link" to={`/`}>
      <div className="logo">
        Apteka<span className="logo__txtFirst">Na</span>
        <p className="logo__txtSecend">Niby</p>
      </div>
    </NavLink>
  );
}
