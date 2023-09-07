import style from "./ProductCard.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCounter from "../ProductCounter/ProductCounter";
import ButtonBuy from "../ButtonBuy/ButtonBuy";
import { getProdukt } from "../../api/getProdukt";

export default function ProductCard() {
  const { id } = useParams();
  const [productItem, setProductItem] = useState("");

  useEffect(() => {
    getProdukt(id, setProductItem);
  }, []);

  if (!productItem) return <h3>Wczytywanie...</h3>;

  return (
    <div className={style.product}>
      <div className={style.wrapper}>
        <div className={style.column}>
          <img
            className={style.img}
            src={productItem.url}
            alt={productItem.name}
          />
        </div>
        <div className={style.column}>
          <h3 className={style.title}>{productItem.name}</h3>
          <h3 className={style.price}>{productItem.price.toFixed(2)} zł.</h3>
          <div className={style.wrapperBattons}>
            <ProductCounter quantity={productItem.quantity} />
            <ButtonBuy className={style.button} />
          </div>
          <h4 className={style.subtitle}>Opis:</h4>
          <p className={style.text}>{productItem.description}</p>
          <h4 className={style.subtitle}>Skład:</h4>
          <p className={style.text}>{productItem.composition}</p>
          <h4 className={style.subtitle}>Stosowanie:</h4>
          <p className={style.text}>{productItem.use}</p>
        </div>
      </div>
    </div>
  );
}
