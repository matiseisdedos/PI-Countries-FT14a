import React from "react"
import { Link } from "react-router-dom"

export default function CountryCard({ id, name, flag, region, capital, subregion, area, population }) {
    return (
        <div className="pais" key={id}>
            <Link to={`/countries/${id}`}>{name}</Link>
            <br />
            <img src={flag} alt="No hay bandera" height="100" />
            <p>{region}</p>
        </div>
    )
}
