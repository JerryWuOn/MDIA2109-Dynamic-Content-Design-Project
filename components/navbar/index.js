import styles from '../navbar/navbar.module.css'

export default function navbar() {
    return (
    <>
    <main className={styles.main}>

    <div>    
    <Image
            src={"/icons/down.jpeg"}
            alt=""
            href=""
            width={30}
            height={30}
            onClick={()=> changeImage("backward")}
            />
    </div> 

    <div>    
    <Image
            src={"/icons/.png"}
            alt={"/icons/leftArrow.png"}
            href="/"
            width={30}
            height={30}
            onClick={()=> changeImage("backward")}
            />
    </div> 

    <div>    
    <Image
            src={"/icons/leftArrow.png"}
            alt={"/icons/leftArrow.png"}
            href="/"
            width={30}
            height={30}
            onClick={()=> changeImage("backward")}
            />
    </div> 

    </main>
    </>
    )
}