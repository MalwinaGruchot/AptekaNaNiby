import { useContext, useEffect, useState } from "react";
import styles from "./PageSerch.module.scss";
import { NavLink } from "react-router-dom";
import { serchProdukts } from "../../api/serchProducts";
import ProductLink from "../ProductLink/ProductLink";
import { AppContext } from "../../providers/AppProvider";

export default function PageSerch() {
  const [products, setProducts] = useState();
  const { param } = useContext(AppContext);

  useEffect(() => {
    serchProdukts(param, setProducts);
  }, [param]);

  if (!products) {
    return <p>Wczytywanie...</p>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Znalezione dla {param}:</h3>
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
