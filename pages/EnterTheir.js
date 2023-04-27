import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/EnterName.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'
import { useState } from 'react';
import Category from './Category';
import Topbar from '../components/topbar';

export default function EnterTheirName() {

const [name, setName] = useState("");
const [isActiveOne, setIsActiveOne] = useState(true);
const [isActiveTwo, setIsActiveTwo] = useState(false);

const passName = (event) => {
  if(event.key === "Enter"){
    console.log("enter")
    setIsActiveOne(false);
    setIsActiveTwo(true);
  }
}

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
       
       <div style={{display: isActiveOne ? 'block' : 'none'}}>
       <h1 className={styles.enter_yourname_header}>Enter Their Details Here:</h1>

       <p className={styles.label}>First Name:</p>
       <div className={styles.spaceholder_first_name}>
       <input 
       className={styles.input_name}
       onChange = {event => setName(event.target.value)}
       onKeyDown={passName}
       type="text" 
       name="name"
       placeholder="First Name">
       </input>
       </div>
       </div>

       <div className={styles.enteryourpage__begin_button_div}>
       <Link href="/Category">
        <button className={styles.enteryourpage__begin_button} onClick="">Begin!!</button>
       </Link>
       </div>

       <div style={{display: isActiveTwo ? 'block' : 'none'}}>
         <Category passName = {name}/>
       </div>

       
      </main>
      
      <Navbar className={styles.navbar}/>
      </div>
    </>
  )
}
