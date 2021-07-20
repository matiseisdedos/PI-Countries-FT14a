import React from "react"
import { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { addActivity } from "../../store/actions/addAct"
import { getCountries } from "../../store/actions/countriesActions"

function FormAct({ countries, activities, addActivity, getCountries }) {
    // function addActivityFunction() {
    //     addActivity();
    // }
    async function getCountriesFunction() {
        await getCountries();
    }
    useEffect(() => {
        getCountriesFunction()
    }, [])

    const handleOnSubmit = function (e) {
        e.preventDefault()
        addActivity(state)
        setState({
            name: '',
            level: '',
            length: '',
            season: '',
            countries: ''
        })
    }

    const [state, setState] = useState({
        name: '',
        level: '',
        length: '',
        season: '',
        countries: ''
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
                <label>Name: </label>
                <input name="name" placeholder="activity" value={state.name} onChange={handleChange} />
                <br></br>
                <label>Level: </label>
                <input type="number" min="1" max="5" name="level" placeholder="1 Min - 5 Max" value={state.level} onChange={handleChange} />
                <br></br>
                <label>Length: </label>
                <input type="number" min="1" placeholder="In hours" name="length" value={state.length} onChange={handleChange}></input>
                <br></br>
                <label>Season: </label>
                <select value={state.season} onChange={handleChange} name="season">
                    <option disabled value="selected">Select</option>
                    <option>Summer</option>
                    <option>Autumn</option>
                    <option>Winter</option>
                    <option>Spring</option>
                </select>
                <br></br>
                <select>
                    {
                        countries.map(e => {
                            <option>{e.name}</option>
                        })
                    }
                </select>
                <br></br>
                <button>Crear</button>
            </form>

        </>
    )
}

const mapStateToProps = state => {
    return {
        activities: state.activities,
        countries: state.countries
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addActivity: activity => {
            dispatch(addActivity(activity))
        },
        getCountries: countries => {
            dispatch(getCountries(countries))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAct)