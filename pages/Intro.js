import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Intro.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Intro() {
  return (
    <>

      <main className={styles.main}>

        <Image
        />


        <div>
          <h1 className={styles.intro_page_header}>Check your Symptoms</h1>
        <h3 className={styles.intro_page_description}>Take a short assessment</h3>
        <h3 className={styles.intro_page_description}>To Find out results for:</h3>
        <h3 className={styles.intro_page_description}> --Possible causes of symptoms</h3>
        <h3 className={styles.intro_page_description}> -- Recommendations on what tot</h3>  
        <h3 className={styles.intro_page_description}>do next, medication or reach out for assistance.</h3>
        </div>


<div className={styles.intro_page_buttons}>
      <Link href="/">
        <button className={styles.intro_decline_button} onclick="">Decline</button>
       </Link>

       <Link href="/Warning">
        <button className={styles.intro_start_button} onclick="">Start</button>
       </Link>

       </div>

      </main>
    </>
  )
}
