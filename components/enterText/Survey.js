import {useState} from "react"
import Category from "../../pages/Category";

export default function Survey() {
    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const[isActiveTwo, setIsActiveTwo] = useState(false)

    const textName = (event) => {
        if(event.key === "Enter") {
            console.log("enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }
    return(
        <div>
            <div style={{display: isActiveOne ? 'block' : 'none'}}>
                <h1>What is your name?</h1>
                <div>
                    <input
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder="Enter name"
                        onKeyDown={textName}
                        type="text"
                    />
                </div>
            </div>
            <div style={{display: isActiveTwo ? 'block': 'none'}}>
            <h1>Hello {name}</h1>
            <Category/>
            </div>
        </div>
    )
}