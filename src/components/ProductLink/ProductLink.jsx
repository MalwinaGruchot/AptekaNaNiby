/* eslint-disable react/prop-types */
import style from "./ProductLink.module.scss";
import { useState, useEffect } from "react";

import ProductCounter from "../ProductCounter/ProductCounter";
import ButtonBuy from "../ButtonBuy/ButtonBuy";

// eslint-disable-next-line react/prop-types
export default function ProductLink({ product }) {
  const [counter, setCounter] = useState(1);
  const [removeDisabled, setRemoveDisbled] = useState(false);
  const [addDisabled, setAddDisbled] = useState(false);

  useEffect(() => {
    if (product.quantity <= 0 || counter === 0) {
      setRemoveDisbled(true);
    } else {
      setRemoveDisbled(false);
    }
    if (product.quantity <= counter) {
      setAddDisbled(true);
    } else {
      setAddDisbled(false);
    }
  }, [counter, product.quantity]);

  return (
    <div className={style.product}>
      <div className={style.imgWrapper}>
        <img
          className={style.img}
          src={import(product.url)}
          alt={product.name}
        />
      </div>
      <h3 className={style.title}>{product.name}</h3>
      <h3 className={style.price}>{product.price.toFixed(2)} zł.</h3>
      <ProductCounter
        removeDisabled={removeDisabled}
        addDisabled={addDisabled}
        counter={counter}
        setCounter={setCounter}
        quantity={product.quantity}
      />
      <ButtonBuy
        removeDisabled={removeDisabled}
        product={product}
        counter={counter}
      />
    </div>
  );
}
