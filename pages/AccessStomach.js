import styles from '../styles/Access.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar/index'
import Image from 'next/image'
import Topbar from '../components/topbar'

export default function Access() {
    return (
        <>
            <div className={styles.body_main}>
                <main className={styles.main}>
                    <div className={styles.main_conatiner}>
                        <div className={styles.overlayButton}>
                            <Topbar/>
                        </div>
                            <h1>Stomach Medication</h1>
                                <div className={styles.content}>
                                    <h2>We recommend you take:</h2>
                                    <div className={styles.overlayButton}>
                                        <Image
                                            src = "/icons/Bismuthsubsalicylate.png"
                                            alt=""
                                            width={120}
                                            height={120}
                                        />
                                    </div>
                                    <div className={styles.input_name} >
                                        <p>Medicine Name: <b>Bismuth subsalicylate</b></p>
                                    </div>
                                    
                                    <h2>Secondary Options</h2>
                                    <div className={styles.overlayButton}>
                                        <Image
                                            src="/icons/Loperamide.png"
                                            alt=""
                                            width={120}
                                            height={120}
                                        />
                                    </div>
                                    <div className={styles.input_name} >
                                        <p>Medicine Name: <b>Loperamide</b></p>
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