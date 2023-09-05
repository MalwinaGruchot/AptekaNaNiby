import styles from "./InfoBaner.module.scss";

// eslint-disable-next-line react/prop-types
export default function InfoBaner({ src }) {
  return (
    <div className={styles.baner} style={{ backgroundImage: `url(${src})` }}>
      <div className={styles.background}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.titleBaner}> Wybrane </h3>
          <h3 className={styles.titleBaner}> dla </h3>
          <h3 className={styles.titleBaner}>Ciebie </h3>
        </div>
      </div>
    </div>
  );
}
