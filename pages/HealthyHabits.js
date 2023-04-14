import styles from '../styles/Healthy.module.css'
import Image from 'next/image'

export default function Healthy() {
    return (
    <>
    <title>HealthyHabits</title>


    <h1>Hello, </h1>

    <section className={styles.healthyHabits__bear_talking}>
    <Image
            src = "/icons/face.png"
            alt =""
            width = {50}
            height = {50}
    />

<p>Here are a few tips to improve overall health and boost immune system</p>

</section>
    </>
    )
}