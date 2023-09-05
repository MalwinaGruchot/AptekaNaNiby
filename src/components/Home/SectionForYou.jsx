import { NavLink } from "react-router-dom";
import InfoBaner from "./InfoBaner";
import styles from "./SectionForYou.module.scss";
import ProduktLink from "../ProductLink/ProduktLink";

const test = [
  {
    name: "Mleko modyfikowane",
    quantity: 10,
    price: 10.0,
    id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    composition:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    use: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    url: "src/assets/products/mleko.jpg",
  },
  {
    name: "Mleko modyfikowane",
    quantity: 10,
    price: 10.0,
    id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    composition:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    use: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    url: "src/assets/products/krem.jpg",
  },
  {
    name: "Mleko modyfikowane",
    quantity: 10,
    price: 10.0,
    id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    composition:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    use: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt eum optio aliquid iste facilis, soluta accusamus, error, expedita consectetur ipsum cupiditate id praesentium. Commodi expedita deleniti minus facilis debitis.",
    url: "src/assets/products/krem2.jpg",
  },
];

export default function SectionForYou() {
  return (
    <section className={styles.forYou}>
      <div className={styles.container}>
        <h2 className={styles.title}>Wybrane dla Ciebie</h2>
        <div className={styles.wrapper}>
          <InfoBaner src={"src/assets/woman.jpg"} />
          {test.map((product) => (
            <NavLink
              className={styles.navLink}
              key={product}
              to={`/forYou/${product.name}`}
            >
              <ProduktLink product={product} />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
