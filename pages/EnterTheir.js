import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/EnterName.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function EnterTheirName() {
  return (
    <>

      <main className={styles.main}>
       
       <h1 className={styles.enter_yourname_header}>Enter Their Details Here:</h1>

       <p className={styles.first_name}>First Name:</p>
       <div className={styles.spaceholder_first_name}>
       <input 
       className={styles.input_first_name}
       type="text" 
       placeholder="First Name">
       </input>
       </div>

       <p className={styles.user_name}>User Name:</p>
       <div className={styles.spaceholder_user_name}>
       <input 
       className={styles.input_user_name}
       type="text" 
       placeholder="User Name">
       </input>
       </div>

       <Link href="/Category">
        <button className={styles.enteryourpage__begin_button} onclick="">Begin!!</button>
       </Link>

      </main>
    </>
  )
}
