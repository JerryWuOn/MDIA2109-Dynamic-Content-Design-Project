import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function disclaimer() {
  return (
    <>

      <main className={styles.main}>


       <h1>Term of Service</h1>
       <p> We are not doctors.
These are only recommendations 
for common over the counter drugs
based on labels
We advise users to consult a 
medical professional or healthcare 
provider if they are seeking medical 
advice, diagnoses, or treatment.
We are not liable for risks or issues 
associated with using or acting upon the 
information on this site.</p>

       <Link href="/PatientChoice">
        <button className={styles.warningpage__understand_button} onclick="">I Understand</button>
       </Link>
      </main>
    </>
  )
}
