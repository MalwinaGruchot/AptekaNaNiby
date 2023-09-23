import styles from "./ArticleLink.module.scss";
import img2 from "../../assets/witd2.jpg";
import img0 from "../../assets/kremart.jpg";
import img1 from "../../assets/smoothie.jpg";
const array = [img0, img1, img2];

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
