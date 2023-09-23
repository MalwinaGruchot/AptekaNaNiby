import { NavLink } from "react-router-dom";
import InfoBaner from "./InfoBaner";
import styles from "./Section.module.scss";
import ProductLink from "../ProductLink/ProductLink";
import { useEffect, useState } from "react";
import { getProdukts } from "../../api/getProdukts";
import banner from "../../assets/essential.jpg";

export default function SectionCare() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProdukts("care", setProductsList);
  }, []);

  return (
    <section
      className={styles.forYou}
      style={{ backgroundColor: "rgb(229, 255, 227)" }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Produkty do pielęgnacji</h2>
        <div className={styles.wrapper}>
          <InfoBaner
            src={banner}
            title={["", "", "Pielęgnacja"]}
            backgroundColor={"yellowgreen"}
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
