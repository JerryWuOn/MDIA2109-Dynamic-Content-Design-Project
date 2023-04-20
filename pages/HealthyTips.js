import Image from 'next/image'
import styles from '../styles/Healthy.module.css'

export default function HealthyTips() {
    return (
    <>
    <title>HealthyTips</title>
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
    <main>
    <h1>Drink More Water</h1>
    <h1>Physical Activity</h1>
    <h1>Get more sleep</h1>
    <h1>Eat well, get enough nutrients</h1>
    <h1>Less screen time</h1>
    </main>
    </>
    )
}