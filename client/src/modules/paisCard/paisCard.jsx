import React from "react"
import { Link } from "react-router-dom"
import "./paisCard.modules.css"

export default function CountryCard({ id, name, imgflag, region }) {
    return (
        <div className="pais" key={id}>
            <Link to={`/app/countries/${id}`}>{name}
                <br />
                <img src={imgflag} alt="No hay bandera" height="100" />
            </Link>
            <p>{region}</p>
        </div>
    )
}
