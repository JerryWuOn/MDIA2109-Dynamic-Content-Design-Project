import styles from '../navbar/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        /** Navigation Bar */
    <>
    <main className={styles.main}>

    <div className={styles.icons}>    
    

<Link href="window.history.back()">
    <img
            src={"/icons/backbutton.svg"}></img>


    <p className={styles.navbar_text}>Back</p>
</Link>

    </div> 

<Link   href="/">
    <div className={styles.icons}>    
    <img
            src={"/icons/homebutton.svg"}></img>


        
               <p className={styles.navbar_text}>Home</p>
    </div> 
</Link>


<Link href="/References">
    <div className={styles.icons}>    
    <img
            src={"/icons/referencebutton.svg"}></img>

               <p className={styles.navbar_text}>Reference</p>
    </div> 
</Link>

    </main>
    </>
     /** Navigation Bar Ended*/
    )
}