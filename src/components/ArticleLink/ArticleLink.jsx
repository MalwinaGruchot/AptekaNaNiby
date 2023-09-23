import styles from "./ArticleLink.module.scss";
import img1 from "../../assets/witd2.jpg";
import img2 from "../../assets/kremart.jpg";
import img3 from "../../assets/smoothie.jpg";
const array = [img1, img2, img3];

export default function ArticleLink({ src, title }) {
  return (
    <div
      className={styles.baner}
      style={{ backgroundImage: `url(${array[src]})` }}
    >
      <div className={styles.background}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.titleBaner}> {title} </h3>
        </div>
      </div>
    </div>
  );
}
