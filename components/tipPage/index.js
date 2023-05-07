import { useState } from "react";
import styles from '../tipPage/tipPage.module.css'
import Link from "next/link";

const slides = [
    {
        image:"/Crousle/exersise.svg",
        alt: "Physical Activity",
        text1: "Physical Activity" ,
        text2: "How much physical activity you need. Children and youth should get at least 60 minutes per day of moderate to vigorous physical activity involving a variety of aerobic activities. Adults, including seniors, should accumulate at least 150 minutes of moderate to vigorous physical activity per week" ,
    },
    {
        image:"/Crousle/drinkWater.svg",
        alt: "Drink more water",
        text1: "Drink more Water",
        text2: "How much physical activity you need. Children and youth should get at least 60 minutes per day of moderate to vigorous physical activity involving a variety of aerobic activities. Adults, including seniors, should accumulate at least 150 minutes of moderate to vigorous physical activity per week" , 
    },
    {
        image:"/Crousle/eatwell.svg",
        alt: "Eat Well",
        text1: "Eat Well",
        text2: "How much paefEWGSVFSdren and youth should get at least 60 minutes per day of moderate to vigorous physical activity involving a variety of aerobic activities. Adults, including seniors, should accumulate at least 150 minutes of moderate to vigorous physical activity per week" , 
    },
    {
        image:"/Crousle/screenTime.svg",
        alt: "Less Screen Time",
        text1: "Less Screen Time",
        text2: "How much physical activity you need. Children and youth should get at least 60 minutes per day of moderate to vigorous physical activity involving a variety of aerobic activities. Adults, including seniors, should accumulate at least 150 minutes of moderate to vigorous physical activity per week" , 
    },
    {
        image:"/Crousle/sleep.svg",
        alt: "Get enough Sleep",
        text1: "Get enough Sleep",
        text2: "How much physical activity you need. Children and youth should get at least 60 minutes per day of moderate to vigorous physical activity involving a variety of aerobic activities. Adults, including seniors, should accumulate at least 150 minutes of moderate to vigorous physical activity per week" , 
    },
]

export default function Carousel(){
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrevSlide(){
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function handleNexrSlide(){
        setCurrentSlide((currentSlide + 1) % slides.length);
    }

    return(
        <div className={styles.carousel}>
            <div className={styles.slides}>

                <div className={styles.slidePic}>
                <img src={slides[currentSlide].image} alt={slides[currentSlide].alt}/>
                </div>

                <div className={styles.slideText1}>{slides[currentSlide].text1}</div>
                <div className={styles.slideText2}>{slides[currentSlide].text2}</div>
            </div>
            <div className={styles.carousel_buttons}>
                <button className={styles.button} onClick = {handlePrevSlide}>Prev</button>
                <button  className={styles.button} onClick = {handleNexrSlide}>Next</button>
            </div>

            <div className={styles.takeQuiz}>
                <Link href="/Quiz">
                <button className={styles.button} onclick="">Take a Quiz</button>
                </Link>
            </div>
    
        </div>
    );
}