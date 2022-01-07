import Image from "next/image";
import styles from "../styles/ProductCart.module.css";

const ProductCart = () => {
  return (
    <div className={styles.container}>
      <Image alt="" height="500" width="500" src="/img/pizza.png" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default ProductCart;
