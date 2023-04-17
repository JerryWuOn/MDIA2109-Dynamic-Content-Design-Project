import styles from '../styles/Results.module.css'
import Topbar from '../components/topbar'
import Navbar from '../components/navbar'

export default function Results(){
    return(
        <>
        <Topbar/>
            <div>
                <h1>Hello, Jerry!!</h1>
                <p><h2>We recommend you take these over the</h2></p>
                <p><h2>counter drugs for:</h2></p>
            <div>
                <input type="text" disabled="disabled">Medical Name</input>
                <input type="text" disabled="disabled">Usage</input>
                <input type="text" disabled="disabled">Doses:</input>
                <input type="text" disabled="disabled">For more serious conditions, please seek professionalmedical assistance</input>
                <button>Access medication</button>
            </div>
            </div>
        <Navbar />
        </>
    )
}