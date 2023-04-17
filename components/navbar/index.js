import styles from '../navbar/navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        /** Navigation Bar */
    <>
    <main className={styles.main}>

    <div className={styles.icons}>    
    
    <Image
            src={"/icons/back.png"}
            alt=""
            href="history.back()"
            width={50}
            height={50}
            onClick=""
            />

    <p className={styles.navbar_text}>Back</p>
    </div> 

    <div className={styles.icons}>    
    <Image
            src={"/icons/home.png"}
            alt=""
            href="/"
            width={50}
            height={50}
            onClick=""
            />
               <p className={styles.navbar_text}>Home</p>
    </div> 

    <div className={styles.icons}>    
    <Image
            src={"/icons/reference.png"}
            alt=""
            href="/References"
            width={50}
            height={50}
            onClick=""
            />
               <p className={styles.navbar_text}>Reference</p>
    </div> 
    
    </main>
    </>
     /** Navigation Bar Ended*/
    )
}