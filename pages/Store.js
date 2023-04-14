import styles from '../styles/Store.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar/index.js';



export default function Store() {
    return (
    <>
    <title>Store</title>

    <h1>Hello,</h1>
    <p>Your medication can be access through these stores:</p>

    <div className={styles.store_lists}>

    <section  className={styles.store1}>
        <h1 className={styles.store1_name}>London Drugs</h1>
         
        <p className={styles.store1_adress}>4970 Kingsway Avenue</p>
        <p className={styles.store1_adress}>Burnaby, British Columbia V5H 2E2</p>

        <a className={styles.stores_phoneNumber}
        href="tel: +16044484806">(604) 448 - 4806</a>

<section className={styles.stores_buttons}>
        <Link href="https://www.londondrugs.com/london-drugs-store-006-burnaby/kingsway-plaza-006.html">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>

       <Link href="https://www.google.com/maps/dir/49.2488105,-122.9805138/4970+Kingsway,+Burnaby,+BC+V5H+2E2/@49.2402446,-123.0058915,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5486765a4154fb4b:0x34d616bf47efd802!2m2!1d-122.9932581!2d49.226">
        <button className={styles.store_button} onclick="">Get Direction</button>
       </Link>
       </section>

    </section>

    <section  className={styles.store1}>
        <h1 className={styles.store1_name}>London Drugs</h1>
         
        <p className={styles.store1_adress}>4970 Kingsway Avenue</p>
        <p className={styles.store1_adress}>Burnaby, British Columbia V5H 2E2</p>

        <a className={styles.stores_phoneNumber}
        href="tel: +16044484806">(604) 448 - 4806</a>

<section className={styles.stores_buttons}>
        <Link href="https://www.londondrugs.com/london-drugs-store-006-burnaby/kingsway-plaza-006.html">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>

       <Link href="https://www.google.com/maps/dir/49.2488105,-122.9805138/4970+Kingsway,+Burnaby,+BC+V5H+2E2/@49.2402446,-123.0058915,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5486765a4154fb4b:0x34d616bf47efd802!2m2!1d-122.9932581!2d49.226">
        <button className={styles.store_button} onclick="">Get Direction</button>
       </Link>
       </section>

    </section>

    <section  className={styles.store1}>
        <h1 className={styles.store1_name}>London Drugs</h1>
         
        <p className={styles.store1_adress}>4970 Kingsway Avenue</p>
        <p className={styles.store1_adress}>Burnaby, British Columbia V5H 2E2</p>

        <a className={styles.stores_phoneNumber}
        href="tel: +16044484806">(604) 448 - 4806</a>

<section className={styles.stores_buttons}>
        <Link href="https://www.londondrugs.com/london-drugs-store-006-burnaby/kingsway-plaza-006.html">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>

       <Link href="https://www.google.com/maps/dir/49.2488105,-122.9805138/4970+Kingsway,+Burnaby,+BC+V5H+2E2/@49.2402446,-123.0058915,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5486765a4154fb4b:0x34d616bf47efd802!2m2!1d-122.9932581!2d49.226">
        <button className={styles.store_button} onclick="">Get Direction</button>
       </Link>
       </section>

    </section>

    <section  className={styles.store1}>
        <h1 className={styles.store1_name}>London Drugs</h1>
         
        <p className={styles.store1_adress}>4970 Kingsway Avenue</p>
        <p className={styles.store1_adress}>Burnaby, British Columbia V5H 2E2</p>

        <a className={styles.stores_phoneNumber}
        href="tel: +16044484806">(604) 448 - 4806</a>

<section className={styles.stores_buttons}>
        <Link href="https://www.londondrugs.com/london-drugs-store-006-burnaby/kingsway-plaza-006.html">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>

       <Link href="https://www.google.com/maps/dir/49.2488105,-122.9805138/4970+Kingsway,+Burnaby,+BC+V5H+2E2/@49.2402446,-123.0058915,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5486765a4154fb4b:0x34d616bf47efd802!2m2!1d-122.9932581!2d49.226">
        <button className={styles.store_button} onclick="">Get Direction</button>
       </Link>
       </section>

    </section>

    <section  className={styles.store1}>
        <h1 className={styles.store1_name}>London Drugs</h1>
         
        <p className={styles.store1_adress}>4970 Kingsway Avenue</p>
        <p className={styles.store1_adress}>Burnaby, British Columbia V5H 2E2</p>

        <a className={styles.stores_phoneNumber}
        href="tel: +16044484806">(604) 448 - 4806</a>

<section className={styles.stores_buttons}>
        <Link href="https://www.londondrugs.com/london-drugs-store-006-burnaby/kingsway-plaza-006.html">
        <button className={styles.store_button} onclick="">More Info</button>
       </Link>

       <Link href="https://www.google.com/maps/dir/49.2488105,-122.9805138/4970+Kingsway,+Burnaby,+BC+V5H+2E2/@49.2402446,-123.0058915,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5486765a4154fb4b:0x34d616bf47efd802!2m2!1d-122.9932581!2d49.226">
        <button className={styles.store_button} onclick="">Get Direction</button>
       </Link>
       </section>

    </section>

    </div>

    <Navbar
   className={styles.navbar} />
    </>
    )
}