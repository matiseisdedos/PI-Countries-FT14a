import { Link } from "react-router-dom"
import "./welcome.module.css"


export default function WelcomePage() {
    return (
        <>
            <div className='boton-inicio'><Link to="/app/countries">HOME</Link></div>

        </>
    )
}