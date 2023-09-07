import { NavLink } from "react-router-dom";
import InfoBaner from "./InfoBaner";
import styles from "./Section.module.scss";
import { useEffect, useState } from "react";
import { getArticles } from "../../api/getArticles";
import ArticleLink from "../ArticleLink/ArticleLink";

export default function SectionArticles() {
  const [articlesList, setArticlesList] = useState([]);
  useEffect(() => {
    getArticles(setArticlesList);
  }, []);
  return (
    <section className={styles.forYou}>
      <div className={styles.container}>
        <h2 className={styles.title}>Strefa porad</h2>
        <div className={styles.wrapper}>
          <InfoBaner
            src={"../../src/assets/artykul.jpg"}
            title={["Wiedza", "w", "pigułce"]}
            backgroundColor={"coral"}
          />
          {articlesList.map((article) => (
            <NavLink
              className={styles.navLink}
              key={article.id}
              to={`/${article.id}`}
              style={{ height: 370 }}
            >
              <ArticleLink src={article.url} title={article.name} />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
