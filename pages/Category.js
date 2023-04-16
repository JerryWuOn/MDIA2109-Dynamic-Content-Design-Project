import styles from '../styles/Category.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Category() {
    return (
    <>
    <title>Category</title>

    <main className={styles.main}>
    
    <h1>Hello, </h1>

    <p className={styles.categoryPage_question}>Where are you experiencing discomfortable today?</p>

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
            <h3 className={styles.category_head}>Nose</h3>
            <p className={styles.category_symptoms}> Nausea</p>
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
            <h3 className={styles.category_head}>Stomach</h3>
            <p className={styles.category_symptoms}> Stomach Ache</p>
            <p className={styles.category_symptoms}>Upset Stomach</p>
            <p className={styles.category_symptoms}>Acid Reflux</p>
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
            <h3 className={styles.category_head}>Eyes</h3>
            <p className={styles.category_symptoms}> Dry Eyes</p>
            <p className={styles.category_symptoms}>Red Eyes</p>
            <p className={styles.category_symptoms}>Blurry Vision</p>
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
            <h3 className={styles.category_head}>Muscles</h3>
            <p className={styles.category_symptoms}> Pain or tendness</p>
            <p className={styles.category_symptoms}>Soreness</p>
            <p className={styles.category_symptoms}>Limited Motion</p>
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
                    width = {100}
                    height = {100}
            />
<div className={styles.category_button}>
        <h1>Other</h1>
            </div>
            </div></button>
       </Link>

       </section>

       </main>
    </>
    )
}
