/* eslint-disable react/prop-types */
import style from "./ProductLink.module.scss";

import ProductCounter from "../ProductCounter/ProductCounter";
import ButtonBuy from "../ButtonBuy/ButtonBuy";

// eslint-disable-next-line react/prop-types
export default function ProductLink({ product }) {
  return (
    <div className={style.product}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={product.url} alt={product.name} />
      </div>
      <h3 className={style.title}>{product.name}</h3>
      <h3 className={style.price}>{product.price.toFixed(2)} zł.</h3>
      <ProductCounter quantity={product.quantity} />
      <ButtonBuy />
    </div>
  );
}
