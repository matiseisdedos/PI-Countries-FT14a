import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { getDetail } from "../../store/actions/countryDetail";
import "./detailCountry.modules.css"

function DetailCountry(props) {
    const id = props.match.params.id
    function detailCountryFunction(id) {
        props.getDetail(id);
    }
    useEffect(() => {
        detailCountryFunction(id)
    }, [])
    // function componentDidMount() {
    //     const id = props.match.params.alpha3Code;
    //     props.getDetail(id);
    // }
    return (
        <>
            {/*id, name, flag, region, capital, subregion, area, population }*/}
            <div className="detailCountry">
                <h3>{props.country.name}</h3>
                <img src={props.country.flag} alt="No se encontro bandera" height="200px" />
                <p> Continent: {props.country.region}</p>
                <p> SubRegion: {props.country.subregion}</p>
                <p> Area: {props.country.area}</p>
                <p> Population: {props.country.population}</p>
            </div>
        </>
    )

}
const mapStateToProps = state => {
    return {
        country: state.country
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDetail: country => {
            dispatch(getDetail(country))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailCountry)