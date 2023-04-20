import Image from "next/image"
import  {useState} from 'react';
import styles from '../languageToggle/languageToggle.module.css'


export default function languageToggle(){


    const handleClick = () => {
        setIsToggle(!IsToggle);
    };

    return(
        <>
        <main>

      

         <label className={styles.switch}>
            <input type="checkbox"/>
            <span className={styles.slider}/>
         </label>
      
           
        </main>
        </>
    )
}