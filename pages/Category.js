import styles from '../styles/Category.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Category() {
    return (
    <>


    <main className={styles.main}>
    
    <h1>Hello, ?</h1>

    <p className={styles.categoryPage_question}>Where are you experiencing discomfortable today?</p>

<section className={styles.category_buttons}>

<section className={styles.button_shape}>
    <Link href="/Symptoms">
    <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>   

        <div className={styles.body_icons}>
         <Image
                    src = "/icons/headIcon.svg"
                    alt =""
                    width = {60}
                    height = {60}
            />
        </div>
            <div className={styles.category_button_texts}>
            <p className={styles.category_head}>Head</p>
            <p className={styles.category_symptoms}>Nausea</p>
            <p className={styles.category_symptoms}>Spinning Sensation</p>
            <p className={styles.category_symptoms}>Lightheadness</p>
            <p className={styles.category_symptoms}>Other</p>
            </div>
            </div></button>
       </Link>
       </section>

       <Link href="/Symptoms">
        
       <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}> 
        <div className={styles.body_icons}>  
         <Image
                    src = "/icons/noseIcon.svg"
                    alt =""
                    width = {60}
                    height = {60}
            />
        </div>

            <div className={styles.category_button_texts}>
            <p className={styles.category_head}>Nose</p>
            <p className={styles.category_symptoms}> Nausea</p>
            <p className={styles.category_symptoms}>Spinning Sensation</p>
            <p className={styles.category_symptoms}>Lightheadness</p>
            <p className={styles.category_symptoms}>Other</p>
            </div>
            </div></button>
       </Link>

       <Link href="/Symptoms">
       <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>  

        <div className={styles.body_icons}>
         <Image
                    src = "/icons/stomachIcon.svg"
                    alt =""
                    width = {60}
                    height = {60}
            />
        </div> 

            <div className={styles.category_button_texts}>
            <p className={styles.category_head}>Stomach</p>
            <p className={styles.category_symptoms}> Stomach Ache</p>
            <p className={styles.category_symptoms}>Upset Stomach</p>
            <p className={styles.category_symptoms}>Acid Reflux</p>
            <p className={styles.category_symptoms}>Other</p>
            </div>
            </div></button>
       </Link>


       <Link href="/Symptoms">
       <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>  

        <div className={styles.body_icons}>
         <Image
                    src = "/icons/eyesIcon.svg"
                    alt =""
                    width = {60}
                    height = {17}
            />
        </div> 
            <div className={styles.category_button_texts}>
            <p className={styles.category_head}>Eyes</p>
            <p className={styles.category_symptoms}> Dry Eyes</p>
            <p className={styles.category_symptoms}>Red Eyes</p>
            <p className={styles.category_symptoms}>Blurry Vision</p>
            <p className={styles.category_symptoms}>Other</p>
            </div>
            </div></button>
       </Link>


       <Link href="/Symptoms">
        <button className={styles.category_button} onclick="">    
        <div className={styles.category_button_inside}>  

        <div className={styles.body_icons}> 
         <Image
                    src = "/icons/exerciseRunning.svg"
                    alt =""
                    width = {60}
                    height = {60}
            />
        </div>
            <div className={styles.category_button_texts}>
            <p className={styles.category_head}>Muscles</p>
            <p className={styles.category_symptoms}> Pain or tendness</p>
            <p className={styles.category_symptoms}>Soreness</p>
            <p className={styles.category_symptoms}>Limited Motion</p>
            <p className={styles.category_symptoms}>Other</p>
            </div>
            </div></button>
       </Link>


       <Link href="/NoneAbove">
        <button className={styles.category_button} onclick="">    
        <div className={styles.category_other_button_inside}>  

        <div className={styles.other_icons}> 
         <Image
                    src = "/icons/otherIcon.svg"
                    alt =""
                    width = {46}
                    height = {46}
            />
        </div>

        <p className={styles.category_head}>Other</p>
        
        </div></button>
       </Link>

       </section>

       </main>
    </>
    )
}
