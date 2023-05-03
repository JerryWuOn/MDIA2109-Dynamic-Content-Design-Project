import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Symptoms.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'
import Topbar from '../components/topbar';



export default function symptomsHead() {

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
       <h1 className={styles.enter_header}>Hello,</h1>
       <h2 className={styles.label}>Where do you feel discomfort</h2>
       <div>
          <div className={styles.title_header}>
            <h3>Muscles</h3>
            <h4>Down below are common symptoms for muscle problems:</h4>
          </div>
          <div className={styles.infoButtons}>
              <div className={styles.input_name} >
                <input type="checkbox"></input>
                <p>Pain or Tenderness</p>
              </div>
              <div className={styles.input_name} >
                <input type="checkbox"></input>
                <p>Muscle Weakness</p>
              </div>
              <div className={styles.input_name} >
                <input type="checkbox"></input>
                <p>Limited Motion</p>
              </div>
              <div className={styles.input_name} >
                <input type="checkbox"></input>
                <p>None of the above</p>
              </div>
          </div>
      </div>

      <form>
        <div className={styles.enteryourpage_submit_button_div}>
          <Link href="/ResultsMuscle">
            <button className={styles.enteryourpage_submit_button}>Submit</button>
          </Link>
        </div>
      </form>
    </main>
      <div className={styles.navbar}>
      <Navbar/>
      </div>
      </div>
    </>
  )
}