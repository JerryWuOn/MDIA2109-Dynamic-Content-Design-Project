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
                    src = "/icons/muscleIcon.svg"
                    alt =""
                    width = {60}
                    height = {60}
                />
                <h3>Muscles</h3>
                </div>

                <Image
                    src = "/icons/Aspirin.png"
                    alt =""
                    width = {120}
                    height = {120}
                />

            </div>
          </div>
          <div className={styles.infoButtons}>
              <div className={styles.input_name} >
                <p>Medicine Name: </p>
                <h5>Aspirin</h5>
              </div>

              <div className={styles.input_name} >
                <p>Usage:</p>
                <h5>The usual dose is 1 or 2 tablets, taken every 4 to 6 hours.</h5>
              </div>

              <div className={styles.input_name} >
                <p>Doses:</p>
                <h5>Do not take more than 12 tablets in 24 hours</h5>
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
          <Link href="/AccessMuscles">
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
