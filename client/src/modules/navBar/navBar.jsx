import React from "react"
import { Link } from "react-router-dom"
import "./navBar.modules.css"

export default function NavBar() {
    return (
        <div className="navBar">
            <Link to="/">Start</Link>
            <Link to="/countries">Home</Link>
            <Link to="#">About</Link>
            <Link to="#">NewActivity</Link>
        </div>
    )
}