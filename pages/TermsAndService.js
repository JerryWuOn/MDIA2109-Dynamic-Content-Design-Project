import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index.js';
import Link from 'next/link'


export default function TermsAndService() {
  return (
    <>

      <main className={styles.main}>


       <h1>Term of Service</h1>
       <b> Caution: We are not doctors</b>
       <p>The information displayed on this website are only recommendations for common over the counter drugs.
Information displayed are based on the labels from the specific medication.
We advise users to consult a medical professional or healthcare provider if they're seeking medical advice, diagnoses, or treatment.
We are not liable for risks or issues associated with using or acting upon the information on this site.</p>

       <Link href="/PatientChoice">
        <button className={styles.warningpage__understand_button} onclick="">I Understand</button>
       </Link>
      </main>
    </>
  )
}
