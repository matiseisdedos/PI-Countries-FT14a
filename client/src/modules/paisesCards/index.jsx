//Aca se generan y se muestran los paises
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getCountries } from "../../store/actions/countriesActions"
import PaisCard from "../paisCard/paisCard";
import './index.modules.css'
import { IoIosSearch } from "react-icons/io";
import { searchCountries } from "../../store/actions/search"



function CountriesCards({ countries, getCountries, searchCountries, search }) {
    async function searchCountriesFunction(state) {
        await searchCountries(state)
    }

    function getCountriesFunction() {
        getCountries();
    }
    useEffect(() => {
        getCountriesFunction()
        searchCountriesFunction(state)
    }, [])
    async function handleOnSubmit(e) {
        e.preventDefault()
        console.log(searchCountriesFunction(state))
        console.log(state)
        console.log(search)
    }
    const [state, setState] = useState({
        search: '',
    })
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input placeholder="Busqueda..." name="search" onChange={handleChange} />
                <button><IoIosSearch /></button>
            </form>

            <div className="cards">
                {countries.map(c => <PaisCard
                    id={c.id}
                    key={c.id}
                    name={c.name}
                    imgflag={c.imgflag}
                    region={c.continent}
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
        countries: state.countries,
        search: state.search
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCountries: countries => {
            dispatch(getCountries(countries))
        },
        searchCountries: country => {
            dispatch(searchCountries(country))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesCards)