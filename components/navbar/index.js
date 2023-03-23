import styles from '../navbar/navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        /** Navigation Bar */
    <>
    <main className={styles.main}>

    <div className={styles.icons}>    
    <Image
            src={"/icons/down.jpeg"}
            alt=""
            href="history.back()"
            width={80}
            height={80}
            onClick=""
            />
    </div> 

    <div className={styles.icons}>    
    <Image
            src={"/icons/homee.png"}
            alt=""
            href=""
            width={80}
            height={80}
            onClick=""
            />
    </div> 

    <div className={styles.icons}>    
    <Image
            src={"/icons/book.png"}
            alt=""
            width={80}
            height={80}
            onClick=""
            />
    </div> 

    </main>
    </>
     /** Navigation Bar End*/
    )
}