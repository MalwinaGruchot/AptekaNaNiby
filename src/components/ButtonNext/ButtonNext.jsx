import styles from "./ButtonNext.module.scss";

// eslint-disable-next-line react/prop-types
export default function ButtonNext({ click }) {
  const handleClick = () => {
    if (typeof click === "function") {
      click((prev) => !prev);
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Dalej
    </button>
  );
}
