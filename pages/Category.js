import styles from '../styles/Category.module.css'
import Link from 'next/link'

export default function Category() {
    return (
    <>
    <title>Category</title>
    
    <h1>Hello, </h1>

    <p>Where are you experiencing discomfortable today?</p>

    <Link href="/ChooseSymptom">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>

       <Link href="">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>

       <Link href="">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>


       <Link href="">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>


       <Link href="">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>


       <Link href="">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>


    </>
    )
}
