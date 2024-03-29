import styles from '../navbar/navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {

    const router = useRouter()
    
    return (

    <>
    <main className={styles.main}>
        <div className={styles.icons}>
            <div className={styles.container_back}>
            <button className={styles.back_button} onClick={() => router.back()} >
                <img src={"/icons/backbutton.svg"}></img>
            </button>
            <p>Back</p>
            </div>  

            <div className={styles.container_home}>
            <Link href="/" className={styles.navbar_text}> 
            <img src={"/icons/homebutton.svg"}></img>   
            </Link>
            <p>Home</p>
            </div> 

            <div className={styles.container_reference}>
            <Link href="/References" className={styles.navbar_text}>  
                <img src={"/icons/referencebutton.svg"}/>
            </Link>
            <p>Reference</p>
            </div> 
        </div>
    </main>
    </>
    )
}