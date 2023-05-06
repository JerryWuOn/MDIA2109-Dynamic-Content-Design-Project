import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/NoneAbove.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Topbar from '../components/topbar'



export default function NoneAbove() {

  return (
    <>

      <Head>
        <title> Meddy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/Icon.svg" />
      </Head>

      <div className={styles.body_main}>
      <main className={styles.main}>
      <div className={styles.overlayButton}>
        <Topbar/>
        </div>
      <h1>Hello There!</h1>

      <div className={styles.noneAbove_pic}>
      <Image
          src = "/icons/sorryBear.svg"
          alt =""
          width = {100}
          height = {219}
          />
      </div>
       <p className={styles.noneAbove_texts}>Sorry, we have nothing to show for now...</p>
       <p className={styles.noneAbove_texts}>Visit your health provider!</p>

      <div className={styles.noneAbove_page_button_div}>
       <Link href="/Category">
        <button className={styles.noneAbove_page_button} onclick="">Retake</button>
       </Link>
       </div>

      </main>

      <div className={styles.navbar}>
      <Navbar/>
      </div>

      </div>
    </>
  )
}
