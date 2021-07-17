import React from "react"
import { Link } from "react-router-dom"
import "./paisCard.modules.css"

export default function CountryCard({ id, name, flag, region, capital, subregion, area, population }) {
    return (
        <div className="pais" key={id}>
            <Link to={`/countries/${id}`}>{name}
                <br />
                <img src={flag} alt="No hay bandera" height="100" />
            </Link>
            <p>{region}</p>

        </div>
    )
}
