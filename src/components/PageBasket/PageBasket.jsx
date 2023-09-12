import { useContext } from "react";
import style from "./PageBasket.module.scss";
import { AppContext } from "../../providers/AppProvider";
import ProductLinkBasket from "../ProductLinkBasket/ProductLinkBasket";
import { NavLink } from "react-router-dom";

export default function PageBasket() {
  const { basket } = useContext(AppContext);
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
        </div>
      </div>
    </section>
  );
}
