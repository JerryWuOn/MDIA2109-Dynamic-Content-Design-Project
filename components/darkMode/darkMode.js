import  {useState, useEffect} from 'react';
import styles from '../darkMode/darkMode.module.css'

export default function DarkMode(){

const [currentTheme, setCurrentTheme] = useState('light')

useEffect(()=> {
    setCurrentTheme(localStorage.getItem('theme') || 'light')
    document.documentElement.setAttribute('data-theme', currentTheme)
}, [currentTheme])

const handleToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(newTheme)
    localStorage.setItem('theme', newTheme)
}



    return(
        <>
        <main>


       <button className={styles.darkmode_button} onClick={handleToggle}>
        {currentTheme === 'light' ? 'ON' : 'OFF'}
       </button>
      
           
        </main>
        </>
    )
}