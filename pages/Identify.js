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
        <button className={styles.patient_choices_myself} onclick="">
        <Image
                src = "/icons/HelloBear.png"
                alt =""
                width = {69}
                height = {104}
        />Myself
        </button>
       </Link>




       <Link href="/EnterTheir">
        <button className={styles.patient_choices_someoneelse} onclick="">
        <Image
                src = "/icons/twoBear.png"
                alt =""
                width = {92}
                height = {81}
        />Someone Else</button>
       </Link>

       </section>
      </main>
      <Navbar/>
    </>
  )
}
