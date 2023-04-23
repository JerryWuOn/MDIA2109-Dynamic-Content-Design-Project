import styles from '../styles/Access.module.css'

import Link from 'next/link'
// components
import Navbar from '../components/navbar/index'
import Topbar from '../components/topbar'
import react from 'react'
import Image from 'next/image'
// import { Inter } from '@next/font'

export default function Access(){
    return(
        <>
        <div className={styles.body_main}>
                
                <div className={styles.overlayButton}>
                    <Image
                        src="/icons/overlayButton.svg"
                        alt=""
                        width={60}
                        height={60}
                    />
                </div>

                

                <h1>Eye medication</h1>
                <h2>We recommend you take Advil</h2>
                <div className={styles.overlayButton}>
                    <Image
                        src="/Medication.svg"
                        alt=""
                        width={213}
                        height={130}
                    />
                </div>
                
                <p>Eye medication</p>
                <h1>Secondary Options</h1>
                <div className={styles.overlayButton}>
                    <Image
                        src="/Medication.svg"
                        alt=""
                        width={213}
                        height={130}
                    />
                </div>
                <button className={styles.button}>Available Stores</button>

            <Navbar/>
        </div>
        </>
    )
}