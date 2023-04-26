import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/EnterName.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function EnterYourName() {

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
              <Image
              src = "/icons/overlayButton.png"
              alt =""
              width = {60}
              height = {60}
              />
          </div>
       <h1 className={styles.enter_yourname_header}>Enter Your Details Here:</h1>
       <div>
        <p className={styles.label}>Name:</p>
          <div className={styles.spaceholder_first_name}>

          <input 
          className={styles.input_name}
          type="text" 
          placeholder="Name"
          id='name'>
          </input>
          </div>
       </div>
        <div className={styles.enteryourpage__begin_button_div}>
          <Link href="/Category">
          <button className={styles.enteryourpage__begin_button} onClick="">Begin!!</button>
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
