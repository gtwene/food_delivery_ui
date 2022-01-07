import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured_Slider = () => {
    const [index, setIndex] = useState(0)
  const images = [
    "/img/image1.jpg",
    "/img/image2.jpg",
    "/img/image3.jfif",
  ];

  const handleArrow = (direction) => {
      if(direction === 'l'){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction ==='r'){
          setIndex(index !==2 ? index+1 : 0)
      }
  }

 

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image layout="fill" alt="" src={img}  />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")} >
        <Image layout="fill" alt="" src="/img/arrowl.png" objectFit="contain" />
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image layout="fill" alt="" src="/img/arrowr.png" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured_Slider;
