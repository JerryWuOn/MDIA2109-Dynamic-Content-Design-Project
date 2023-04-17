import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'
import Topbar from '../components/topbar';

export default function Welcome() {
  return (
    <div className={styles.body_main}>
      <Head>
        <title> Meddy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
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
        src = "/icons/Icon.png"
        alt =""
        width = {130}
        height = {163}
        />
        </div>

       <div
       className={styles.welcome_page__texts}>
       <h1
       className={styles.welcome_page_header}>Welcome to Meddy</h1>
       <p
       className={styles.welcome_page_slogan}>Meddy provides you with a fast assessment of your current symptoms you may be feeling</p>
       </div>

       <div
       className={styles.welcome_page_button_section}>
       <Link href="/Startpage">
        <button className={styles.welcome_page_button} onclick="">Begin!!</button>
       </Link>
       </div>


       <Topbar/>
      </main>
    </div>
  )
}
