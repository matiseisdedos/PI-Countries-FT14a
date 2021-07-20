import axios from 'axios'
import { COUNTRIES_URL } from '../../constants'

export const FILTER_CONTINENT = "FILTER_CONTINENT"
export function filterContinent(continent) {
    return async function (dispatch) {
        return await axios.get(`http://localhost:3001/countries/filter/${continent}`)
            .then((response) => {
                dispatch({
                    type: FILTER_CONTINENT,
                    payload: response.data
                })
            })
    }
}