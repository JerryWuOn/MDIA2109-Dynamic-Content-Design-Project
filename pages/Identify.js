import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Identify.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function Identify() {
  return (
    <>

      <main className={styles.main}>

       <h1 className={styles.patient_choices_header}>Who is this Checkup For?</h1>


<section className={styles.patient_choices_buttons}>
        <Link href="/EnterYou">
        <button className={styles.patient_choices_myself} onclick="">Myself</button>
       </Link>



       <Link href="/EnterTheir">
        <button className={styles.patient_choices_someoneelse} onclick="">Someone Else</button>
       </Link>

       </section>
      </main>
      <Navbar/>
    </>
  )
}
