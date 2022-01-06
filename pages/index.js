import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Delivery Website</title>
        <meta name="description" content="Best food webapp in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      My Homepage
    </div>
  );
}
