//Aca se generan y se muestran los paises
import { useState, useEffect } from "react"
import axios from "axios"
import { COUNTRIES_URL } from "../../constants"


export default function CountriesCards() {
    const [countries, setCountries] = useState([])

    function getCountries() {
        return axios.get(COUNTRIES_URL)
            .then(countries => setCountries(countries.data))
    }
    useEffect(() => {
        getCountries()
    }, [])
    return (
        <div>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code}>
                        <p>{country.name}</p>
                        <img src={country.flag} alt="No se encontro bandera" height="200" />
                    </div>
                );
            })}</div>)
}