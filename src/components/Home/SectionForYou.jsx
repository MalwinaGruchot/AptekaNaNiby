import { NavLink } from "react-router-dom";
import InfoBaner from "./InfoBaner";
import styles from "./Section.module.scss";
import ProductLink from "../ProductLink/ProductLink";
import { useEffect, useState } from "react";
import { getProdukts } from "../../api/getProdukts";
import baner from "../../assets/woman.jpg";

export default function SectionForYou() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProdukts("forYou", setProductsList);
  }, []);

  return (
    <section
      className={styles.forYou}
      style={{ backgroundColor: "rgb(229, 255, 227)" }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Wybrane dla Ciebie</h2>
        <div className={styles.wrapper}>
          <InfoBaner
            src={baner}
            title={["Wybrane", "dla", "Ciebie"]}
            backgroundColor={" rgb(255, 0, 115)"}
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
