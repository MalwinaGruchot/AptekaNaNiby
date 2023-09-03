import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <h3 className={styles.title}>Dane adersowe</h3>
            <ul className={styles.list}>
              <li className={styles.item}>BOK AptekaNaNiby</li>
              <li className={styles.item}>ul. NaNiby</li>
              <li className={styles.item}>77-777 Apteczno</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title}>Zamówienia telefoniczne</h3>
            <ul className={styles.list}>
              <li className={styles.item}>tel. 777-777-777 </li>
              <li className={styles.item}>pon.-pt.</li>
              <li className={styles.item}>9:00-17:00</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title}>Zamówienia e-mailowe</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                e-mail: aptekananiby@aptekananiby.pl
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.baner}>
        <div className={styles.background}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.titleBaner}> Przygotuj </h3>
            <h3 className={styles.titleBaner}> apteczkę </h3>
            <FontAwesomeIcon icon={faKitMedical} className={styles.icon} />
            <h3 className={styles.titleBaner}>na jesień</h3>
          </div>
        </div>
      </div>
    </>
  );
}
