import Image from 'next/image'
import styles from '../styles/Healthy.module.css'
import Head from 'next/head'
import Carousel from '../components/tipPage';
import Navbar from '../components/navbar/index.js';
import Topbar from '../components/topbar';

export default function HealthyTips() {
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
    
    <h1>Hello, </h1>

<section className={styles.healthyHabits__bear_talking}>
<Image
    src = "/icons/bearHead.svg"
    alt =""
    width = {50}
    height = {50}
/>
<p>Here are a few tips to improve overall health and boost immune system</p>
</section>

<Carousel/>
    </main>

<div className={styles.navbar}>
    <Navbar/>
</div>
    </div>
    </>
    )
}