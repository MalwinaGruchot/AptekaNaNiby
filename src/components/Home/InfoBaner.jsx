import styles from "./InfoBaner.module.scss";

// eslint-disable-next-line react/prop-types
export default function InfoBaner({ src }) {
  return (
    <div className={styles.infoBaner}>
      <div className={styles.wrapper}>
        <img src={src}></img>
        <h3 className={styles.title}>Wybrane dla Ciebie</h3>
      </div>
    </div>
  );
}
