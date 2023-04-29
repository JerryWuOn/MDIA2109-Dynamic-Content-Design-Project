import styles from '../styles/References.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar/index.js';
import Head from 'next/head'
import Image from 'next/image';
import Topbar from '../components/topbar';

export default function References() {

  var name = process.env.NEXT_PUBLIC_NAME;

    return (
    <>
    <Head>
        <title> Meddy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/Icon.svg" />
    </Head>


  <div className={styles.body_main}>
    <main className={styles.main}>

      {/* HERE LIES ENVIRONMENT VARIABLE */}
        {name}

    <div className={styles.overlayButton}>
        <Topbar/>
        </div>

        
    
     


      <h1 className={styles.references_title}>References</h1>
      <p className={styles.references_description}>Quick links to the primary medication for each category:</p>


  <section className={styles.reference_lists}>
      
      <section className={styles.references_section}>
        
          <div className={styles.references_section_content}>
            <div className={styles.references_section_image}>
        <Image
              src = "/icons/eyesIcon.svg"
              alt =""
              width = {87}
              height = {24}
        />
          </div>

        <h1 className={styles.medication_title}>Eye Medication</h1>
          </div>

        <Link className={styles.medication_link} href="https://medlineplus.gov/druginfo/meds/a682159.html#:~:text=Nonprescription%20ibuprofen%20is%20used%20to,class%20of%20medications%20called%20NSAIDs">Learn More</Link>
    
      </section>


      <section className={styles.references_section}>

      <div className={styles.references_section_content}>

      <div className={styles.references_section_image}>
        <Image
              src = "/icons/headIcon.svg"
              alt =""
              width = {60}
              height = {60}
        />
        </div>

        <h1 className={styles.medication_title}>Head Medication</h1>
        </div>


        <Link className={styles.medication_link} href="https://medlineplus.gov/druginfo/meds/a682159.html#:~:text=Nonprescription%20ibuprofen%20is%20used%20to,class%20of%20medications%20called%20NSAIDs">Learn More</Link>
      </section>


      <section className={styles.references_section}>

      <div className={styles.references_section_content}>

      <div className={styles.references_section_image}>
        <Image
              src = "/icons/noseIcon.svg"
              alt =""
              width = {60}
              height = {60}
        />
        </div>

        <h1 className={styles.medication_title}>Nose Medication</h1>

        </div>

        <Link className={styles.medication_link} href="https://medlineplus.gov/druginfo/meds/a682159.html#:~:text=Nonprescription%20ibuprofen%20is%20used%20to,class%20of%20medications%20called%20NSAIDs">Learn More</Link>
      </section>


        <section className={styles.references_section}>

        <div className={styles.references_section_content}>

        <div className={styles.references_section_image}>
        <Image
              src = "/icons/stomachIcon.svg"
              alt =""
              width = {60}
              height = {60}
        />
        </div>

        <h1 className={styles.medication_title}>Stomach Medication</h1>

        </div>

        <Link className={styles.medication_link} href="https://medlineplus.gov/druginfo/meds/a682159.html#:~:text=Nonprescription%20ibuprofen%20is%20used%20to,class%20of%20medications%20called%20NSAIDs">Learn More</Link>
      </section>


      <section className={styles.references_section}>

      <div className={styles.references_section_content}>

      <div className={styles.references_section_image}>
        <Image
              src = "/icons/exerciseRunning.svg"
              alt =""
              width = {60}
              height = {60}
        />
        </div>

        <h1 className={styles.medication_title}>Muscle Medication</h1>
      </div>

        <Link className={styles.medication_link} href="https://medlineplus.gov/druginfo/meds/a682159.html#:~:text=Nonprescription%20ibuprofen%20is%20used%20to,class%20of%20medications%20called%20NSAIDs">Learn More</Link>
      </section>


      <section className={styles.references_section}>

      <div className={styles.references_section_content_others}>

      <div className={styles.references_section_image}>
        <Image
              src = "/icons/otherIcon.svg"
              alt =""
              width = {60}
              height = {60}
        />
        </div>

        <Link className={styles.medication_link} href="https://medlineplus.gov/druginfo/meds/a682159.html#:~:text=Nonprescription%20ibuprofen%20is%20used%20to,class%20of%20medications%20called%20NSAIDs">Learn More</Link>
        
        <h1 className={styles.medication_title}>Others</h1>
        </div>
        
      </section>

    </section>
    </main>

      <div className={styles.navbar}>
      <Navbar/>
      </div>

          </div>
      </>
    )
}