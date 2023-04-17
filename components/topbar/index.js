import Image from "next/image"
import  {useState} from 'react';

export default function Topbar(){

    const [isToggle, setIsToggle] = useState(false);

    const handleClick = () => {
        setIsToggle(!isToggle);
    };

    return(
        <>
        <main>
            <div>
                <Image
                src={"/icons/down.jpeg"}
                alt=""
                width={30}
                height={30}
                onClick=""
                />
            </div>

            <button onClick={handleClick}>
                {isToggle ? 'ON' : "OFF"}
            </button>

            <button onClick={handleClick}>
                {isToggle ? 'EN' : "JP"}
            </button>
        </main>
        </>
    )
}