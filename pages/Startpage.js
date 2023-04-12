import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function Intro() {
  return (
    <>

      <main className={styles.main}>

        <Image
        />


        <div>
          <h1 className={styles.intro_page_header}>Check your Symptoms</h1>
        <h2 className={styles.intro_page_description}>Take a short assessment to get results for</h2>
        <ul className={styles.intro_page_list}> 
          <li>Symptoms</li>
          <li>Recommendations for treatments</li>
          <li>Medications</li>
          <li>Tips to keep your body healthy</li>
        </ul>
        </div>


<div className={styles.intro_page_buttons}>
      <Link href="/">
        <button className={styles.intro_decline_button} onclick="">Decline</button>
       </Link>

       <Link href="/TermsAndService">
        <button className={styles.intro_start_button} onclick="">Start</button>
       </Link>

       </div>

      </main>
    </>
  )
}
