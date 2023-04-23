import Head from 'next/head'
import styles from '../styles/References.module.css'
import Topbar from '../components/topbar/index'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import React from 'react'


export default function References() {
    return (
        <>

<div className={styles.body_main}>
        <Head>
        <title> Meddy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/Icon.svg" />
      </Head>



            <main lassName={styles. main}>
                <div className={styles.overlayButton}>
                    <Image
                        src="/icons/overlayButton.svg"
                        alt=""
                        width={60}
                        height={60}
                    />
                </div>


                <div>
                    <h1 className={styles.referencepage_header}>References</h1>
                    <p className={styles.referencepage_description}>Quick links to the primary medication for each category:</p>

      

                 
  

        
                 </div>

                 <div className={styles.navbar}>
                    <Navbar/>
                 </div>

            </main>

            </div>

  
        </>
    )
}