/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import style from "./ProductCounter.module.scss";

export default function ProductCounter({ quantity }) {
  const [counter, setCounter] = useState(1);
  const [removeDisabled, setRemoveDisbled] = useState(false);
  const [addDisabled, setAddDisbled] = useState(false);

  useEffect(() => {
    if (quantity <= 0 || counter === 0) {
      setRemoveDisbled(true);
    } else {
      setRemoveDisbled(false);
    }
    if (quantity <= counter) {
      setAddDisbled(true);
    } else {
      setAddDisbled(false);
    }
  }, [counter, quantity]);

  const handleClick = (e, param) => {
    e.preventDefault();
    setCounter((prev) => prev + param);
  };

  return (
    <div className={style.wrapper}>
      <button
        className={style.button}
        disabled={removeDisabled}
        onClick={(e) => handleClick(e, -1)}
      >
        -
      </button>
      <p className={style.counter}>{counter}</p>
      <button
        className={style.button}
        disabled={addDisabled}
        onClick={(e) => handleClick(e, +1)}
      >
        +
      </button>
    </div>
  );
}
