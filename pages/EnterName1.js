import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function EnterYourName() {
  return (
    <>

      <main className={styles.main}>
       
       <h1>Enter The Parson's Name Here:</h1>

       <p>First Name:</p>
       <input 
       type="text" 
       placeholder="First Name">
       </input>

       <p>User Name:</p>
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
