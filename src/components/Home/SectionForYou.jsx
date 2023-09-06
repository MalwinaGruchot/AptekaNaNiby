import { NavLink } from "react-router-dom";
import InfoBaner from "./InfoBaner";
import styles from "./SectionForYou.module.scss";
import ProductLink from "../ProductLink/ProductLink";
import { useEffect, useState } from "react";
import { getProdukts } from "../../api/getProdukts";

export default function SectionForYou() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProdukts("forYou", setProductsList);
  }, []);

  return (
    <section className={styles.forYou}>
      <div className={styles.container}>
        <h2 className={styles.title}>Wybrane dla Ciebie</h2>
        <div className={styles.wrapper}>
          <InfoBaner src={"src/assets/woman.jpg"} />
          {productsList.map((product) => (
            <NavLink
              className={styles.navLink}
              key={product.id}
              to={`/forYou/${product.id}`}
            >
              <ProductLink product={product} />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
