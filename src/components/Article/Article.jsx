import { useEffect, useState } from "react";
import { getArticle } from "../../api/getArticle";
import { useParams } from "react-router-dom";
import styles from "./Article.module.scss";
import { constArticle } from "../../assets/const";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState("");

  useEffect(() => {
    getArticle(id, setArticle);
  }, [id]);

  if (!article) {
    return <p>Wczytywanie...</p>;
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <div className={styles.imgWrapp}>
          <img className={styles.img} src={article.url}></img>
        </div>
        <h2 className={styles.title}>{article.name}</h2>
        <p className={styles.text}>{constArticle[0]}</p>
        <p className={styles.text}>{constArticle[1]}</p>
        <p className={styles.text}>{constArticle[2]}</p>
      </div>
    </article>
  );
}
