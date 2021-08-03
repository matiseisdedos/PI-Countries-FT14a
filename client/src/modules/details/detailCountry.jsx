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
    return (
        <>
            {/*id, name, flag, region, capital, subregion, area, population }*/}
            <div className="detailCountry">
                <h3>Name: {props.country.name}</h3>
                <img src={props.country.imgflag} alt="No se encontro bandera" height="200px" />
                <p> Continent: {props.country.continent}</p>
                <p> SubRegion: {props.country.subregion}</p>
                <p> Area: {props.country.area}</p>
                <p> Population: {props.country.population}</p>
            </div>
            <div className='activities'>
                {
                    props.country.activities?.map(e =>
                        <div className="activity" key={e.id}>
                            <h3>{e.name}</h3>
                            <p>Difficulty: {e.level}</p>
                            <p>Length: {e.length} hs</p>
                            <p>Season: {e.season}</p>
                        </div>
                    )
                }
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