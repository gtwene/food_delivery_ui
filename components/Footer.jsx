import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
          <Image alt="" layout="fill" objectFit="cover" src="/img/bg.png" />
      </div>
      <div className={styles.item}>
      <div className={styles.card}>
          <h2 className={styles.motto}>
              OH YES, WE DID THE LAMA PIZZA, WELL BAKED SLICED PIZZA.
          </h2>
      </div> 
      <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
              360 Ave. Street Road Weija.
              <br /> Accra Ghana, 00233
              <br /> (+233) 550-72-4745
          </p>
          <p className={styles.text}>
              360 Ave. Street Road Weija.
              <br /> Accra Ghana, 00233
              <br /> (+233) 550-72-4745
          </p>
          <p className={styles.text}>
              360 Ave. Street Road Weija.
              <br /> Accra Ghana, 00233
              <br /> (+233) 550-72-4745
          </p>
          <p className={styles.text}>
              360 Ave. Street Road Weija.
              <br /> Accra Ghana, 00233
              <br /> (+233) 550-72-4745
          </p>
      </div> 
      <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
      </div> 
      </div>
    </div>
  );
};

export default Footer;
