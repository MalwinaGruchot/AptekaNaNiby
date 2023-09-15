import { useState } from "react";
import styles from "./Form.module.scss";

export default function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email1, setEmail1] = useState("");
  const [send, setSend] = useState(false);
  const [err, setErr] = useState({
    name: false,
    surname: false,
    street: false,
    houseNumber: false,
    apartmentNumber: false,
    code: false,
    phone: false,
    email1: false,
  });

  const validate = () => {
    setErr({
      name: false,
      surname: false,
      street: false,
      houseNumber: false,
      apartmentNumber: false,
      code: false,
      phone: false,
      email1: false,
    });
    const error = {
      name: false,
      surname: false,
      street: false,
      houseNumber: false,
      apartmentNumber: false,
      code: false,
      phone: false,
      email1: false,
    };
    if (name.length < 3) error.name = true;
    if (surname.length < 3) error.surname = true;
    if (street.length < 3) error.street = true;
    if (houseNumber.length < 1 || houseNumber.length > 4)
      error.houseNumber = true;
    if (apartmentNumber.length > 5) error.apartmentNumber = true;
    if (code.length !== 5) error.code = true;
    if (city.length < 3) error.city = true;
    if (phone.includes("-") ? phone.length !== 11 : phone.length !== 9)
      error.phone = true;
    if (!email1.includes("@")) error.email1 = true;
    setErr(error);
    if (
      error.name ||
      error.surname ||
      error.street ||
      error.houseNumber ||
      error.apartmentNumber ||
      error.code ||
      error.phone ||
      error.email1
    ) {
      return false;
    } else {
      return true;
    }
  };

  const clearForm = () => {
    setName("");
    setSurname("");
    setStreet("");
    setHouseNumber("");
    setApartmentNumber("");
    setCity("");
    setCode("");
    setPhone("");
    setEmail1("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      clearForm();
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        id="form"
        noValidate
      >
        <div className={styles.wrapperInput}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Imię"
          />

          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Nazwisko"
          />

          <input
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Ulica"
          />

          <input
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            className={styles.inputShort}
            type="number"
            placeholder="Nr domu"
          />
          <input
            value={apartmentNumber}
            onChange={(e) => setApartmentNumber(e.target.value)}
            className={styles.inputShort}
            type="number"
            placeholder="Nr mieszkania"
          />
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={styles.inputShort}
            type="number"
            placeholder="Kod pocztowy"
          />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.inputShort}
            type="text"
            placeholder="Miejscowość"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            type="number"
            placeholder="Nr telefonu"
          />
          <input
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="Adres email"
          />
        </div>
      </form>
      <section className={styles.priceInfo}>
        <h3 className={styles.info}>Płatność przy odbiorze:</h3>
        <button className={styles.submit} type="submit" form="form">
          Zamów
        </button>
        {err.name ? (
          <p className={styles.validate}>
            Pole -Imię- powinno mieć więcej niż 3 znaki.
          </p>
        ) : null}
        {err.surname ? (
          <p className={styles.validate}>
            Pole -Nazwisko- powinno mieć więcej niż 3 znaki.
          </p>
        ) : null}
        {err.street ? (
          <p className={styles.validate}>
            Pole -Ulica- powinno mieć więcej niż 3 znaki.
          </p>
        ) : null}
        {err.houseNumber ? (
          <p className={styles.validate}>
            Pole -Nr domu- powinno mieć 1-5 znaków.
          </p>
        ) : null}
        {err.apartmentNumber ? (
          <p className={styles.validate}>
            Pole -Nr mieszkania- powinno mieć mniej niż 5 znaków.
          </p>
        ) : null}
        {err.code ? (
          <p className={styles.validate}>
            Pole -Kod pocztowy- powinno mieć 5 znaków.
          </p>
        ) : null}
        {err.city ? (
          <p className={styles.validate}>
            Pole Miejscowość powinno mieć więcej niż 3 znaki.
          </p>
        ) : null}
        {err.phone ? (
          <p className={styles.validate}>Błedny numer telefonu.</p>
        ) : null}
        {err.email1 ? (
          <p className={styles.validate}>Email powinien zawierać -@-.</p>
        ) : null}
        {send ? (
          <p className={styles.validate}>Twoje zamówienie zostało wysłane.</p>
        ) : null}
      </section>
    </div>
  );
}
