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
        <h1>References</h1>
        <p>Quick links to the primary medication for each category:</p>
        
        <Navbar className={styles.nav}/>
        
    </div>
    </>
    )
}