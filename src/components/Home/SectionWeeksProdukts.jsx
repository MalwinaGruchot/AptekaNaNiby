import { NavLink } from "react-router-dom";
import InfoBaner from "./InfoBaner";
import styles from "./Section.module.scss";
import ProductLink from "../ProductLink/ProductLink";
import { useEffect, useState } from "react";
import { getProdukts } from "../../api/getProdukts";

export default function SectionWeeksProdukts() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProdukts("weeksProducts", setProductsList);
  }, []);

  return (
    <section className={styles.forYou}>
      <div className={styles.container}>
        <h2 className={styles.title}>Produkty tygodnia</h2>
        <div className={styles.wrapper}>
          <InfoBaner
            src={"../../src/assets/tydzien.jpg"}
            title={["Produkty", "tygodnia"]}
            backgroundColor={"darkorange"}
          />
          {productsList.map((product) => (
            <NavLink
              className={styles.navLink}
              key={product.id}
              to={`/products/${product.id}`}
            >
              <ProductLink product={product} />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
