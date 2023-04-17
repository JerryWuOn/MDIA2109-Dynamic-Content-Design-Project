import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Startpage.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function Startpage() {
  return (
    <div className={styles.body_main}>
      <main className={styles.main}>
      <div className={styles.overlayButton}>
          <Image
           src = "/icons/overlayButton.png"
           alt =""
           width = {60}
           height = {60}
           />
        </div>
        <div className={styles.main_image}>
        <Image
        src = "/icons/HiBear.png"
        alt =""
        width = {119}
        height = {219}
        />
        </div>
        <div>
          <h1 className={styles.intro_page_header}>Check your Symptoms</h1>
        <h2 className={styles.intro_page_description}>Take a short assessment to get results for:</h2>
        <ul className={styles.intro_page_list}> 
          <li>Symptoms</li>
          <li>Recommendations for treatments</li>
          <li>Medications</li>
          <li>Tips to keep your body healthy</li>
        </ul>
        </div>


<div className={styles.intro_page_buttons}>
      <Link href="/">
        <button className={styles.intro_button} onclick="">Decline</button>
       </Link>
       <Link href="/TermsAndService">
        <button className={styles.intro_button} onclick="">Start</button>
       </Link>
       </div>
      </main>
    </div>
  )
}
