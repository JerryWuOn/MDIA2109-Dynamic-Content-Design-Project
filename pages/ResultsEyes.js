import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Results.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'
import Topbar from '../components/topbar';



export default function Symptoms() {

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
       <h2 className={styles.label}>We recommend you take these over the counter drugs for:</h2>
       <div>
          <div className={styles.title_header}>
            <div className={styles.title_Container}>
                <div className={styles.imageCaption} >
                <Image
                    src = "/icons/eyesIcon.svg"
                    alt =""
                    width = {60}
                    height = {60}
                />
                <h3>Eyes</h3>
                </div>

                <Image
                    src = "/icons/Systane.png"
                    alt =""
                    width = {120}
                    height = {120}
                />

            </div>
          </div>
          <div className={styles.infoButtons}>
              <div className={styles.input_name} >
                <p>Medicine Name: </p>
                <h5>Systane Eye Drops</h5>
              </div>

              <div className={styles.input_name} >
                <p>Usage:</p>
                <h5>Use 1-2 drops per eye as needed.</h5>
              </div>

              <div className={styles.input_name} >
                <p>Doses:</p>
                <h5>No more than four doses in one day</h5>
              </div>

              <div className={styles.input_name} >
                <p>Serious:  for more serious conditions,  please seek professional meassistance
                </p>
              </div>
          </div>
      </div>

      <div className={styles.healthyButtons}>
      <form>
        <div className={styles.enteryourpage_submit_button_div}>
          <Link href="/AccessEyes">
            <button className={styles.enteryourpage_submit_button}>Access Medication</button>
          </Link>
        </div>
      </form>
      </div>

    </main>
      <div className={styles.navbar}>
      <Navbar/>
      </div>
      </div>
    </>
  )
}