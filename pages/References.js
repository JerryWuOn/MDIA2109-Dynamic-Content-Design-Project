import Head from 'next/head'
import styles from '../styles/References.module.css'
import Topbar from '../components/topbar/index'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'


export default function References() {
    return (
    <>
    <title>References</title>
    <div className={styles.box}>
        <Topbar/>

            <div>
            <h1>References</h1>
            <p>Quick links to the primary medication for each category:</p>

            <div className={styles.cards}>
                <h2>
                    Eye medication
                </h2>
                
                <p>
                    Advil
                </p>
                <a className={styles.link}>Learn more</a>
                
            </div>

            <div className={styles.cards}>
                <h2>Head medication</h2>
                <p>Advil</p>
                <a className={styles.link}>Learn more</a>
            </div>

            <div className={styles.cards}>
                <h2>Nose medication</h2>
                <p>Advil</p>
                <a className={styles.link}>Learn more</a>
            </div>

        </div>
        
        <Navbar className={styles.nav}/>
        
    </div>
    </>
    )
}