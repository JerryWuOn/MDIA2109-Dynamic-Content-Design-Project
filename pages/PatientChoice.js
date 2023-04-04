import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function Intro() {
  return (
    <>

      <main className={styles.main}>

       <h1>Who is this Checkup For?</h1>


<section className={styles.patient_choices_buttons}>
        <Link href="/EnterName2">
        <button className={styles.intro__understand_button} onclick="">Myself</button>
       </Link>



       <Link href="/EnterName1">
        <button className={styles.intro__understand_button} onclick="">Someone Else</button>
       </Link>

       </section>

       <Navbar/>


      </main>
    </>
  )
}
