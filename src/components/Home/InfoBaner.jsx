import styles from "./InfoBaner.module.scss";

// eslint-disable-next-line react/prop-types
export default function InfoBaner({ src, title, backgroundColor }) {
  return (
    <div className={styles.baner} style={{ backgroundImage: `url(${src})` }}>
      <div className={styles.background} style={{ backgroundColor }}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.titleBaner}> {title[0]} </h3>
          <h3 className={styles.titleBaner}> {title[1]} </h3>
          <h3 className={styles.titleBaner}>{title[2]} </h3>
        </div>
      </div>
    </div>
  );
}
