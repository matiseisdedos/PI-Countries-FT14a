//Aca se generan y se muestran los paises
import { useEffect } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getCountries } from "../../store/actions/countriesActions"
import PaisCard from "../paisCard/paisCard";
import './index.modules.css'
import { IoIosSearch } from "react-icons/io";



function CountriesCards({ countries, getCountries }) {

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
                <button><IoIosSearch /></button>
            </form>

            <div className="cards">
                {countries.map(c => <PaisCard
                    id={c.alpha3Code}
                    key={c.alpha3Code}
                    name={c.name}
                    flag={c.flag}
                    region={c.region}
                    capital={c.capital}
                    subregion={c.subregion}
                    area={c.area}
                    population={c.population}
                />)}
            </div>
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