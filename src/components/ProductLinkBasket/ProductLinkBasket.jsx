/* eslint-disable react/prop-types */
import style from "./ProductLinkBasket.module.scss";
import { useState, useEffect } from "react";

import ProductCounter from "../ProductCounter/ProductCounter";

// eslint-disable-next-line react/prop-types
export default function ProductLinkBasket({ product }) {
  const [order, setOrder] = useState(product.order);
  const [removeDisabled, setRemoveDisbled] = useState(false);
  const [addDisabled, setAddDisbled] = useState(false);

  useEffect(() => {
    if (product.quantity <= 0 || order <= 1) {
      setRemoveDisbled(true);
    } else {
      setRemoveDisbled(false);
    }
    if (product.quantity === 0) {
      setAddDisbled(true);
    } else {
      setAddDisbled(false);
    }
  }, [order, product.quantity]);

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
      </div>
    </div>
  );
}
