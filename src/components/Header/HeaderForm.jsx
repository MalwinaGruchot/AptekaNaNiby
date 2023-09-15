import { NavLink } from "react-router-dom";
import "./HeaderForm.scss";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

export default function HeaderForm() {
  const { param, setParam } = useContext(AppContext);

  return (
    <form className="header__form">
      <input
        name="serch"
        type="text"
        className="header__input"
        placeholder="Wyszukaj..."
        value={param}
        onChange={(e) => setParam(e.target.value)}
      ></input>
      <NavLink to="/wyszukaj">
        <i className="fa-solid fa-magnifying-glass"></i>
      </NavLink>
    </form>
  );
}
