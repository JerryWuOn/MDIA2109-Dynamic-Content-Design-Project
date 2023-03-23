import styles from '../navbar/navbar.module.css'

export default function Navbar() {
    return (
        /** Navigation Bar */
    <>
    <main className={styles.main}>
    <div>    
    <Image
            src={"/icons/down.jpeg"}
            alt=""
            width={30}
            height={30}
            onClick="history.back()"
            />
    </div> 

    <div>    
    <Image
            src={"/icons/homee.png"}
            alt=""
            width={30}
            height={30}
            onClick="location.href='/'"
            />
    </div> 

    <div>    
    <Image
            src={"/icons/book.png"}
            alt=""
            width={30}
            height={30}
            onClick="location.href='/References'"
            />
    </div> 
    </main>
    </>
     /** Navigation Bar End*/
    )
}