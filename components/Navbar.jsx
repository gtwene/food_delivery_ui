import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width='32' height='32' />
                </div>
            <div className={styles.items}>
            
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>055 072 4745</div>
                </div>
            </div>
            <div className={styles.items}>center</div>
            <div className={styles.items}>right</div>
        </div>
    )
}

export default Navbar

