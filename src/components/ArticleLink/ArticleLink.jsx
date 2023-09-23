import styles from "./ArticleLink.module.scss";
import imgt from "../../assets/witd2.jpg";

export default function ArticleLink({ src, title }) {
  return (
    <div className={styles.baner} style={{ backgroundImage: `url(${imgt})` }}>
      <div className={styles.background}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.titleBaner}> {title} </h3>
        </div>
      </div>
    </div>
  );
}
