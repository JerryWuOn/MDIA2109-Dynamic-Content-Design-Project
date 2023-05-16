import Head from 'next/head';
import styles from '../styles/Symptoms.module.css';
import Navbar from '../components/navbar/index.js';
import Topbar from '../components/topbar';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SymptomsPage() {
  const router = useRouter();
  const { selectedData, name } = router.query;

  if (!selectedData) {
    return null;
  }

  const data = JSON.parse(selectedData);
  const decodedName = decodeURIComponent(name);
  const greeting = `Hello, ${decodedName}`;

  const [isChecked, setIsChecked] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      router.push('/NoneAbove');
    } else {
      router.push({
        pathname: `/Results${data.category}`,
        query: { greeting },
      });
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Head>
        <title>Meddy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/Icon.svg" />
      </Head>
      <div className={styles.body_main}>
        <main className={styles.main}>
          <div className={styles.overlayButton}>
            <Topbar />
          </div>
          <h1 className={styles.enter_header}>{greeting}</h1>
          <h2 className={styles.label}>Where do you feel discomfort?</h2>
          <div>
            <div className={styles.title_header}>
              <h3>{data.category}</h3>
              <h4>{data.description}</h4>
            </div>

            <div className={styles.infoButtons}>
              <div className={styles.input_name}>
                <input type="checkbox" onChange={handleCheckboxChange} />
                <p>{data.symptomsOne}</p>
              </div>
              <div className={styles.input_name}>
                <input type="checkbox" onChange={handleCheckboxChange} />
                <p>{data.symptomsTwo}</p>
              </div>
              <div className={styles.input_name}>
                <input type="checkbox" onChange={handleCheckboxChange} />
                <p>{data.symptomsThree}</p>
              </div>
              <div className={styles.input_name}>
                <input type="checkbox" onChange={handleCheckboxChange} />
                <p>{data.symptomsFour}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className={styles.enteryourpage_submit_button_div}>
              <button type="submit" className={styles.enteryourpage_submit_button}>
                Submit
              </button>
            </div>
          </form>
        </main>
        <div className={styles.navbar}>
          <Navbar />
        </div>
      </div>
    </>
  );
}
