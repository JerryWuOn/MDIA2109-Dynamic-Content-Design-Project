import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/EnterName.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function EnterTheirName() {
  return (
    <>

<Head>
        <title> Meddy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/Icon.svg" />
      </Head>
      <main className={styles.main}>
       
       <h1 className={styles.enter_yourname_header}>Enter Their Details Here:</h1>

       <p className={styles.label}>First Name:</p>
       <div className={styles.spaceholder_first_name}>
       <input 
       className={styles.input_name}
       type="text" 
       placeholder="First Name">
       </input>
       </div>

       <p className={styles.label}>User Name:</p>
       <div className={styles.spaceholder_user_name}>
       <input 
       className={styles.input_name}
       type="text" 
       placeholder="User Name">
       </input>
       </div>

       <div className={styles.enteryourpage__begin_button_div}>
       <Link href="/Category">
        <button className={styles.enteryourpage__begin_button} onclick="">Begin!!</button>
       </Link>
       </div>
       
      </main>
    </>
  )
}
