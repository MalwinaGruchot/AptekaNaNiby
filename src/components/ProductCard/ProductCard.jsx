import style from "./ProductCard.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCounter from "../ProductCounter/ProductCounter";
import ButtonBuy from "../ButtonBuy/ButtonBuy";
import { getProdukt } from "../../api/getProdukt";
import { description, composition, use } from "../../assets/const";
import imgList from "../../api/importImg";

export default function ProductCard() {
  const { id } = useParams();
  const [productItem, setProductItem] = useState("");
  const [counter, setCounter] = useState(1);
  const [removeDisabled, setRemoveDisbled] = useState(false);
  const [addDisabled, setAddDisbled] = useState(false);

  useEffect(() => {
    if (productItem.quantity <= 0 || counter === 0) {
      setRemoveDisbled(true);
    } else {
      setRemoveDisbled(false);
    }
    if (productItem.quantity <= counter) {
      setAddDisbled(true);
    } else {
      setAddDisbled(false);
    }
  }, [counter, productItem.quantity]);

  useEffect(() => {
    getProdukt(id, setProductItem);
  }, [id]);

  if (!productItem) return <h3>Wczytywanie...</h3>;

  return (
    <div className={style.product}>
      <div className={style.wrapper}>
        <div className={style.column}>
          <img
            className={style.img}
            src={imgList[productItem.url]}
            alt={productItem.name}
          />
        </div>
        <div className={style.column}>
          <h3 className={style.title}>{productItem.name}</h3>
          <h3 className={style.price}>{productItem.price.toFixed(2)} zł.</h3>
          <div className={style.wrapperBattons}>
            <ProductCounter
              addDisabled={addDisabled}
              removeDisabled={removeDisabled}
              counter={counter}
              quantity={productItem.quantity}
              setCounter={setCounter}
            />
            <ButtonBuy
              removeDisabled={removeDisabled}
              product={productItem}
              className={style.button}
              counter={counter}
            />
          </div>
          <h4 className={style.subtitle}>Opis:</h4>
          <p className={style.text}>{description}</p>
          <h4 className={style.subtitle}>Skład:</h4>
          <p className={style.text}>{composition}</p>
          <h4 className={style.subtitle}>Stosowanie:</h4>
          <p className={style.text}>{use}</p>
        </div>
      </div>
    </div>
  );
}
