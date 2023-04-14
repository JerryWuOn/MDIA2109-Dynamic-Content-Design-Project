import styles from '../styles/Category.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Category() {
    return (
    <>
    <title>Category</title>
    
    <h1>Hello, </h1>

    <p>Where are you experiencing discomfortable today?</p>

<section className={styles.category_buttons}>
    <Link href="/ChooseSymptom">
    <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>   
         <Image
                    src = "/icons/head.png"
                    alt =""
                    width = {50}
                    height = {50}
            />
            <div className={styles.category_button_texts}>
            <h3 className={styles.category_head}>Head</h3>
            <p className={styles.category_symptoms}>Nausea</p>
            <p className={styles.category_symptoms}>Spinning Sensation</p>
            <p className={styles.category_symptoms}>Lightheadness</p>
            <p className={styles.category_symptoms}>Other</p>
            </div>
            </div></button>
       </Link>

       <Link href="">
       <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>   
         <Image
                    src = "/icons/head.png"
                    alt =""
                    width = {50}
                    height = {50}
            />
            <div className={styles.category_button_texts}>
            <h3>Head</h3>
            <p> Nausea</p>
            <p>Spinning Sensation</p>
            <p>Lightheadness</p>
            <p>Other</p>
            </div>
            </div></button>
       </Link>

       <Link href="">
       <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>   
         <Image
                    src = "/icons/head.png"
                    alt =""
                    width = {50}
                    height = {50}
            />
            <div className={styles.category_button_texts}>
            <h3>Head</h3>
            <p> Nausea</p>
            <p>Spinning Sensation</p>
            <p>Lightheadness</p>
            <p>Other</p>
            </div>
            </div></button>
       </Link>


       <Link href="">
       <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>   
         <Image
                    src = "/icons/head.png"
                    alt =""
                    width = {50}
                    height = {50}
            />
            <div className={styles.category_button_texts}>
            <h3>Head</h3>
            <p> Nausea</p>
            <p>Spinning Sensation</p>
            <p>Lightheadness</p>
            <p>Other</p>
            </div>
            </div></button>
       </Link>


       <Link href="">
        <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>   
         <Image
                    src = "/icons/head.png"
                    alt =""
                    width = {50}
                    height = {50}
            />
            <div className={styles.category_button_texts}>
            <h3>Head</h3>
            <p> Nausea</p>
            <p>Spinning Sensation</p>
            <p>Lightheadness</p>
            <p>Other</p>
            </div>
            </div></button>
       </Link>


       <Link href="">
       <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>   
         <Image
                    src = "/icons/head.png"
                    alt =""
                    width = {50}
                    height = {50}
            />
            <div className={styles.category_button_texts}>
            <h3>Head</h3>
            <p> Nausea</p>
            <p>Spinning Sensation</p>
            <p>Lightheadness</p>
            <p>Other</p>
            </div>
            </div></button>
       </Link>

       </section>
    </>
    )
}
