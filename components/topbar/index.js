import Image from "next/image"
import  {useState} from 'react';

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

            {IsActive && <div>
                <button onClick={handleClick}>
                {IsToggle ? 'ON' : "OFF"}
            </button>

            <button onClick={handleClick}>
                {IsToggle ? 'EN' : "JP"}
            </button>
                
                </div>}
           
        </main>
        </>
    )
}