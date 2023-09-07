import styles from "./ArticleLink.module.scss";

export default function ArticleLink({ src, title }) {
  return (
    <div className={styles.baner} style={{ backgroundImage: `url(${src})` }}>
      <div className={styles.background}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.titleBaner}> {title} </h3>
        </div>
      </div>
    </div>
  );
}
