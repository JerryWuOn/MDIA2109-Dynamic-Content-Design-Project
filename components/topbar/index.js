import Image from "next/image"
import  {useState} from 'react';
import styles from '../topbar/topbar.module.css'
import DarkMode from "../darkMode/darkMode";


export default function Topbar (){
    const [IsActive, setIsActive] = useState(false);

    return(
        <>

        <div onClick = {() => setIsActive(!IsActive)}>

            <div>{IsActive ? <Image 
            src = "/icons/overlayButton.png"
            alt =""
            width = {60}
            height = {60}
            /> : <Image
            src = "/icons/overlayButton.png"
            alt =""
            width = {60}
            height = {60}
            />}</div>

        </div>

        {IsActive && <div>
         <div className={styles.darkmode_button}><p>Dark Mode</p>

         <DarkMode className={styles.button}/>
     
         
         </div>

        </div>}
        
        </>
    )
}
