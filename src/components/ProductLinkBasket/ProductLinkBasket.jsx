/* eslint-disable react/prop-types */
import style from "./ProductLinkBasket.module.scss";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import { useState, useEffect, useContext } from "react";
import ProductCounter from "../ProductCounter/ProductCounter";
import { AppContext } from "../../providers/AppProvider";

// eslint-disable-next-line react/prop-types
export default function ProductLinkBasket({ product }) {
  const [order, setOrder] = useState(product.order);
  const [removeDisabled, setRemoveDisbled] = useState(false);
  const [addDisabled, setAddDisbled] = useState(false);
  const { setBasket, basket } = useContext(AppContext);

  useEffect(() => {
    if (basket.quantity <= 0 || order <= 1) {
      setRemoveDisbled(true);
    } else {
      setRemoveDisbled(false);
    }
    if (product.quantity === 0) {
      setAddDisbled(true);
    } else {
      setAddDisbled(false);
    }
  }, [order, product.quantity, basket.quantity]);

  useEffect(() => {
    setBasket((prev) =>
      prev.map((el) =>
        el.id === product.id
          ? { ...el, order, quantity: product.quantity - (order - el.order) }
          : el
      )
    );
  }, [order, product.id, product.quantity]);

  return (
    <div className={style.product}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={product.url} alt={product.name} />
      </div>
      <div className={style.textWrapper}>
        <h3 className={style.title}>{product.name}</h3>
        <h3 className={style.price}>{product.price.toFixed(2)} zł.</h3>
      </div>
      <div className={style.test}>
        <ProductCounter
          className={style.counter}
          removeDisabled={removeDisabled}
          addDisabled={addDisabled}
          counter={order}
          setCounter={setOrder}
          quantity={product.quantity}
        />
        <ButtonDelete id={product.id} />
      </div>
    </div>
  );
}
