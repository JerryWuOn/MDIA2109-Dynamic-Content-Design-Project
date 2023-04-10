import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/EnterName.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function EnterYourName() {
  return (
    <>

      <main className={styles.main}>
       
       <h1 className={styles.enter_yourname_header}>Enter Your Details Here:</h1>

       <p className={styles.input_first_name}>First Name:</p>
       <input 
       type="text" 
       placeholder="First Name">
       </input>

       <p className={styles.input_user_name}>User Name:</p>
       <input 
       type="text" 
       placeholder="User Name">
       </input>

       <Link href="/Category">
        <button className={styles.enteryourpage__begin_button} onclick="">Begin!!</button>
       </Link>

      </main>
    </>
  )
}
