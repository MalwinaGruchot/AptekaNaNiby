import "./HeaderForm.scss";

export default function HeaderForm() {
  return (
    <form className="header__form">
      <input
        name="serch"
        type="text"
        className="header__input"
        placeholder="Wyszukaj..."
      ></input>
      <i className="fa-solid fa-magnifying-glass"></i>
    </form>
  );
}
