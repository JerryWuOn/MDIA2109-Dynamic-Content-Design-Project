import styles from '../navbar/navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        /** Navigation Bar */
    <>
    <main className={styles.main}>
        <div className={styles.navContainer}>
        <div>    
        <Image
                src={"/icons/down.png"}
                alt=""
                width={30}
                height={30}
                onClick="history.back()"
                />
        </div> 
        <div>    
        <Image
                src={"/icons/homee.png"}
                alt=""
                width={30}
                height={30}
                onClick="location.href='/'"
                />
        </div> 
        <div>    
        <Image
                src={"/icons/book.png"}
                alt=""
                width={30}
                height={30}
                onClick="location.href='/References'"
                />
        </div> 
    </div>
    </main>
    </>
     /** Navigation Bar End*/
    )
}