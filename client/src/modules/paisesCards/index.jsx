//Aca se generan y se muestran los paises
import { useState, useEffect } from "react"
import axios from "axios"
import { COUNTRIES_URL } from "../../constants"
import { connect } from 'react-redux'
import { getCountries } from "../../store/actions/countriesActions"



function CountriesCards(countries, getCountries) {

    function getCountriesFunction() {
        getCountries();
    }
    useEffect(() => {
        getCountriesFunction()
    }, [])
    return (
        <>
            <form>
                <input placeholder="Busqueda..." />
                <button>Search</button>
            </form>

            <div>
                {countries.map((country) => {
                    return (
                        <div key={country.alpha3Code}>
                            <p>{country.name}</p>
                            <img src={country.flag} alt="No se encontro bandera" height="200" />
                            <p>{country.region}</p>
                        </div>
                    );
                })}</div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        countries: state.countries
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCountries: countries => {
            dispatch(getCountries(countries))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesCards)