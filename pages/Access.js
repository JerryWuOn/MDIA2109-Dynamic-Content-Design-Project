import styles from '../styles/Access.module.css'

import Link from 'next/link'
// components
import Navbar from '../components/navbar/index'
import react from 'react'
import Image from 'next/image'
// import { Inter } from '@next/font'

export default function Access(){
    return(
        <>
        <div className={styles.body_main}>
            <div className={styles.main_conatiner}>   
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
                
                <p className={styles.border}>Eye medication</p>
                <h1>Secondary Options</h1>
                <div className={styles.overlayButton}>
                    <Image
                        src="/Medication.svg"
                        alt=""
                        width={213}
                        height={130}
                    />
                </div>
                <div className={styles.container}>
                <button className={styles.welcome_page_button} onclick="">Health Tips</button>
                <button className={styles.welcome_page_button} onclick="">Available Stores</button>
                </div>
            </div>
            <Navbar/>
        </div>
        </>
    )
}