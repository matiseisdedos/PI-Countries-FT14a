//Aca se generan y se muestran los paises
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getCountries } from "../../store/actions/countriesActions"
import PaisCard from "../paisCard/paisCard";
import './index.modules.css'
import { IoIosSearch } from "react-icons/io";
import { searchCountries } from "../../store/actions/search"
import { getOrder } from "../../store/actions/order";



function CountriesCards({ countries, getCountries, searchCountries, search, getOrder }) {

    function getCountriesFunction() {
        getCountries();
    }
    useEffect(() => {
        getCountriesFunction()
    }, [])
    async function handleOnSubmit(e) {
        e.preventDefault()
        searchCountries(state.search)
    }
    async function handleOnSubmitOrder(e) {
        e.preventDefault()
        getOrder(state.orden)
    }
    const [state, setState] = useState({
        search: '',
        orden: ''
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

            <form onSubmit={handleOnSubmitOrder}>
                <select onChange={handleChange} name="orden">
                    <option selected disabled>Seleccione</option>
                    <option value="DESCP"> Mayor Poblacion</option>
                    <option onChange={handleChange} value="ASCP"> Menor Poblacion</option>
                    <option onChange={handleChange} value="ASC"> Nombre A-Z</option>
                    <option onChange={handleChange} value="DESC"> Nombre Z-A</option>
                </select>
                <button>Ordenar</button>
            </form>

            {/* <button type="submit" name="orden" value="DESCP" onClick={handleChange, handleOnSubmit}>Orden</button> */}
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCountries: countries => {
            dispatch(getCountries(countries))
        },
        searchCountries: country => {
            dispatch(searchCountries(country))
        },
        getOrder: order => {
            dispatch(getOrder(order))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesCards)