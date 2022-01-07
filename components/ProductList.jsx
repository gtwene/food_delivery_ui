import styles from "../styles/ProductList.module.css";
import ProductCart from "./ProductCart";
const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        reprehenderit harum enim doloremque tempora, saepe quis nisi. Minima
        dolore ex tempore, quis doloremque voluptate, minus animi et nisi,
        nesciunt ea.
      </p>
      <div className={styles.wrapper}>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default ProductList;
