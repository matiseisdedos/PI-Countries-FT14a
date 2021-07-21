//Aca se generan y se muestran los paises
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { getCountries } from "../../store/actions/countriesActions"
import PaisCard from "../paisCard/paisCard";
import './index.modules.css'
import { IoIosSearch } from "react-icons/io";
import { searchCountries } from "../../store/actions/search"
import { getOrder } from "../../store/actions/order";
import { filterContinent } from "../../store/actions/getContinents";



function CountriesCards({ countries, getCountries, searchCountries, search, getOrder, filterContinent }) {
    // Para paginacion y pantalla de carga
    // const [paises, setPaises] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [paisesPorPagina, setPaisesPorPagina] = useState(10);




    useEffect(() => {
        getCountries()
    }, [])
    async function handleOnSubmit(e) {
        e.preventDefault()
        searchCountries(state.search)
    }
    async function handleOnSubmitOrder(e) {
        e.preventDefault()
        getOrder(state.orden)
    }
    async function handleOnSubmitFilter(e) {
        e.preventDefault()
        filterContinent(state.filter)
    }
    const [state, setState] = useState({
        search: '',
        orden: '',
        filter: ''
    })
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>

            <div className="filtrados">
                <form onSubmit={handleOnSubmitOrder}>
                    <select onChange={handleChange} name="orden">
                        <option selected disabled>Seleccione</option>
                        <option value="DESCP"> Mayor Poblacion</option>
                        <option value="ASCP"> Menor Poblacion</option>
                        <option value="ASC"> Nombre A-Z</option>
                        <option value="DESC"> Nombre Z-A</option>
                    </select>

                    <button>Ordenar</button>
                </form>

                <form onSubmit={handleOnSubmit}>
                    <input placeholder="Busqueda..." name="search" onChange={handleChange} />
                    <button><IoIosSearch /></button>
                </form>

                <form onSubmit={handleOnSubmitFilter}>
                    <select onChange={handleChange} name="filter" >
                        <option defaultValue disabled>Seleccione...</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Polar">Polar</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <button>Ordenar</button>
                </form>
            </div>
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
        },
        filterContinent: continent => {
            dispatch(filterContinent(continent))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesCards)