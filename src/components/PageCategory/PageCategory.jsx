import { useEffect, useState } from "react";
import styles from "./PageCategory.module.scss";
import { getProdukts } from "../../api/getProdukts";
import ProductLink from "../ProductLink/ProductLink";
import { NavLink } from "react-router-dom";

export default function PageCategory({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProdukts(category, setProducts);
  }, [category]);

  if (!products.length) {
    return <p>Wczytywanie...</p>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>{category}</h3>
        <div className={styles.wrapper}>
          {products.map((product) => (
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
    </div>
  );
}
