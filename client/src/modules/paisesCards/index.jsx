//Aca se generan y se muestran los paises
import { useState, useEffect } from "react"
import axios from "axios"
import { COUNTRIES_URL } from "../../constants"


export default function CountriesCards() {
    const [countries, setCountries] = useState([])

    function getCountries() {
        return axios.get("http://localhost:3001/countries")
            .then(countries => setCountries(countries.data))
    }
    useEffect(() => {
        getCountries()
    }, [])
    return (
        <div>
            {countries.map((country) => {
                return (
                    <div>
                        <p>{country.name}</p>
                        <img src={country.flag} alt="No se encontro bandera" />
                    </div>
                );
            })}</div>)
}