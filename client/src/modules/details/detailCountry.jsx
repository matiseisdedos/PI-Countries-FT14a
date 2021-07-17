import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { getDetail } from "../../store/actions/countryDetail";

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
            <div>
                {props.country.name}
                {/*hay que agregar todos los datos*/}
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