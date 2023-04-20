import Image from "next/image"
import  {useState} from 'react';
import styles from '../topbar/topbar.module.css'


export default function Topbar(){

    const [IsToggle, setIsToggle] = useState(false);
    const [IsActive, setIsActive] = useState(false);
     

    const handleClick = () => {
        setIsToggle(!IsToggle);
    };

    return(
        <>
        <main>

        <div onClick={()=> setIsActive(!IsActive)}>
            <div >{IsActive ? '+' : '+'}</div>
        </div>
            <div>
                <Image
                src={"/icons/down.jpeg"}
                alt=""
                width={30}
                height={30}
                onClick=""
                />
            </div>

         <label className={styles.switch}>
            <input type="checkbox"/>
            <span className={styles.slider}/>
         </label>
      
           
        </main>
        </>
    )
}