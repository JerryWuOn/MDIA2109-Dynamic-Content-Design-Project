import styles from '../styles/Access.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar/index'
import Image from 'next/image'
import Topbar from '../components/topbar'
import { Bubble } from 'react-chartjs-2'

export default function Access() {
    return (
        <>
            <div className={styles.body_main}>
                <main className={styles.main}>
                    <div className={styles.main_conatiner}>
                        <div className={styles.overlayButton}>
                            <Topbar/>
                        </div>
                        <h1 className={styles.enter_header}>Nose Medication</h1>
                            <section className={styles.access_bear_talking}>
                            <Image
                                src = "/icons/bearHead.svg"
                                alt =""
                                width = {50}
                                height = {50}
                            />
                            <h3>We recommend you take:</h3>
                            </section>
                                <div className={styles.content}>
                                    <h2>Primary Recommendation</h2>
                                    <div className={styles.overlayButton}>
                                        <Image
                                            src = "/icons/Antitussives.png"
                                            alt=""
                                            width={120}
                                            height={120}
                                        />
                                    </div>
                                    <div className={styles.input_name} >
                                        <p>Medicine Name: <b>Antitussives</b></p>
                                    </div>
                                    
                                    <h2>Secondary Options</h2>
                                    <div className={styles.overlayButton}>
                                        <Image
                                            src="/icons/Decongestants.png"
                                            alt=""
                                            width={120}
                                            height={120}
                                        />
                                    </div>
                                    <div className={styles.input_name} >
                                        <p>Medicine Name: <b>Decongestants</b></p>
                                    </div>
                            </div>
                        </div>
                </main>
                <div className={styles.container}>
                        <Link href="/HealthyTips">
                        <button className={styles.welcome_page_button} onclick="">Health Tips</button>
                        </Link>
                                    
                        <Link href="/Store">
                        <button className={styles.welcome_page_button} onclick="">Available store</button>
                        </Link>
                    </div>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
            </div>
        </>
    )
}