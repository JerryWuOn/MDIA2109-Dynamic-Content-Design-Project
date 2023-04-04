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


        <Link href="/Warning">
        <button className={styles.intro__understand_button} onclick="">Myself</button>
       </Link>



       <Link href="/Warning">
        <button className={styles.intro__understand_button} onclick="">Someone Else</button>
       </Link>


      </main>
    </>
  )
}
