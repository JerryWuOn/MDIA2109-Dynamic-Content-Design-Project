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
            <title>References</title>
            <div className={styles.body_main}>

                <div className={styles.overlayButton}>
                    <Image
                        src="/icons/overlayButton.svg"
                        alt=""
                        width={60}
                        height={60}
                    />
                </div>

                <div>
                    <h1>References</h1>
                    <p>Quick links to the primary medication for each category:</p>

                    <div className={styles.cards}>

                        <div className={styles.eye}>
                            <Image
                                src="/icons/eyes icon.svg"
                                alt=""
                                width={87}
                                height={24}
                            />
                        </div>

                        <div className={styles.text}>
                            <h2>Eye medication</h2>
                            <p>Advil</p>
                            <a className={styles.link}>Learn more</a>
                        </div>

                    </div>

                    <div className={styles.cards}>

                        <div className={styles.head}>
                            <Image
                                src="/icons/head icon.svg"
                                alt=""
                                width={71}
                                height={70}
                            />
                        </div>

                        <div>
                            <h2>Head medication</h2>
                            <p>Advil</p>
                            <a className={styles.link}>Learn more</a>
                        </div>

                    </div>

                    <div className={styles.cards}>

                        <div className={styles.nose}>
                            <Image
                                src="/icons/nose icon.svg"
                                alt=""
                                width={61}
                                height={60}
                            />
                        </div>

                        <div>
                            <h2>Nose medication</h2>
                            <p>Advil</p>
                            <a className={styles.link}>Learn more</a>
                        </div>

                    </div>

                    <div className={styles.cards}>

                        <div className={styles.eye}>
                            <Image
                                src="/icons/stomach icon.svg"
                                alt=""
                                width={60}
                                height={106}
                            />
                        </div>

                        <div>
                            <h2>Stomach medication</h2>
                            <p>Advil</p>
                            <a className={styles.link}>Learn more</a>
                        </div>

                    </div>

                    <div className={styles.cards}>

                        <div className={styles.stomach}>
                            <Image
                                src="/icons/muscle icon.svg"
                                alt=""
                                width={60}
                                height={60}
                            />
                        </div>

                        <div>
                            <h2>Muscle medication</h2>
                            <p>Advil</p>
                            <a className={styles.link}>Learn more</a>
                        </div>

                    </div>

                    <div className={styles.cards}>

                        <div className={styles.other}>
                            <Image
                                src="/icons/other icon.svg"
                                alt=""
                                width={60}
                                height={60}
                            />
                        </div>

                        <div>
                            <h2>Other </h2>
                            <p>Advil</p>
                        </div>

                    </div>

                </div>

                <Navbar className={styles.nav} />

            </div>

            <div>

            </div>

        </>
    )
}