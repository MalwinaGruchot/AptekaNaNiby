import { useEffect, useState } from "react";
import "./SectionBanner.scss";
import baner1 from "../../assets/sun.jpg";
import baner2 from "../../assets/baby.jpg";
import baner3 from "../../assets/capsules.jpg";

const img = [baner1, baner2, baner3];

export default function SectionBanner() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCounter((prev) => (prev + 1) % img.length);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [counter]);

  const changeCounter = (number) => {
    setCounter((prev) =>
      prev + number === -1 ? img.length - 1 : (prev + number) % img.length
    );
  };

  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <img className="banner__img" src={img[counter]}></img>
        </div>
      </div>
      <div className="container banner__container">
        <i
          onClick={() => {
            changeCounter(-1);
          }}
          className="fa-solid fa-chevron-left"
        ></i>
        <div>
          {img.map((img, i) => (
            <div
              key={img}
              name={img}
              className={i === counter ? "banner__dot active" : "banner__dot"}
              onClick={() => setCounter(i)}
            ></div>
          ))}
        </div>
        <i
          onClick={() => {
            changeCounter(+1);
          }}
          className="fa-solid fa-chevron-right"
        ></i>
      </div>
    </section>
  );
}
