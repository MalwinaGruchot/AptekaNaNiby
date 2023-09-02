import InfoBaner from "./InfoBaner";
import styles from "./SectionForYou.module.scss";

export default function SectionForYou() {
  return (
    <section className={styles.forYou}>
      <div className={styles.container}>
        <h2 className={styles.title}>Wybrane dla Ciebie</h2>
        <div className={styles.wrapper}>
          <InfoBaner src={"src/assets/woman.jpg"} />
          <InfoBaner src={"src/assets/woman.jpg"} />
          <InfoBaner src={"src/assets/woman.jpg"} />
          <InfoBaner src={"src/assets/woman.jpg"} />
        </div>
      </div>
    </section>
  );
}
