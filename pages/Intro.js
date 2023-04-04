import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Intro() {
  return (
    <>

      <main className={styles.main}>

        <Image
        />


        <div>
        <h3>Take a short assessment</h3>
        <h3>To Find out results for:</h3>
        <h3> --Possible causes of symptoms</h3>
        <h3> -- Recommendations on what tot</h3>  
        <h3>do next, medication or reach out for assistance.</h3>
        </div>


        <Link href="/Warning">
        <button className={styles.intro__understand_button} onclick="">I Understand</button>
       </Link>


      </main>
    </>
  )
}
