import { useContext, useState } from "react";
import style from "./PageBasket.module.scss";
import { AppContext } from "../../providers/AppProvider";
import ProductLinkBasket from "../ProductLinkBasket/ProductLinkBasket";
import { NavLink } from "react-router-dom";
import ButtonNext from "../ButtonNext/ButtonNext";

export default function PageBasket() {
  const { basket, price } = useContext(AppContext);
  const [isFormActive, setIsFormActive] = useState(false);

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
          <section className={style.priceSection}>
            <h2 className={style.subtitle}>Suma:</h2>
            <h2 className={style.price}>{price} zł.</h2>
            <ButtonNext className={style.button} click={setIsFormActive} />
          </section>
        </div>
      </div>
      {isFormActive ? <form>form,form,form</form> : null}
    </section>
  );
}
