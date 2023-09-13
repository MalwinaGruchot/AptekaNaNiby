import { useContext } from "react";
import style from "./PageBasket.module.scss";
import { AppContext } from "../../providers/AppProvider";
import ProductLinkBasket from "../ProductLinkBasket/ProductLinkBasket";
import { NavLink } from "react-router-dom";

export default function PageBasket() {
  const { basket } = useContext(AppContext);

  if (basket.length === 0) {
    return (
      <section className={style.basket}>
        <div className={style.container}>
          <h2 className={style.title}>Twój koszyk na niby jest pusty.</h2>
        </div>
      </section>
    );
  }

  return (
    <section className={style.basket}>
      <div className={style.container}>
        <h2 className={style.title}>Twój koszyk na niby:</h2>
        <div className={style.wrapper}>
          <div className={style.wrapperProduct}>
            {basket.map((product) => (
              <NavLink
                key={product.id}
                to={`/products/${product.id}`}
                className={style.navlink}
              >
                <ProductLinkBasket product={product}></ProductLinkBasket>
              </NavLink>
            ))}
          </div>
          <section className={style.price}>
            <h3>Suma:</h3>
            <h3>50,00zł</h3>
          </section>
        </div>
      </div>
    </section>
  );
}
