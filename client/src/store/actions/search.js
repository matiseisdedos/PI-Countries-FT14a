import axios from 'axios'
import { COUNTRIES_URL } from '../../constants'

export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES"
export function searchCountries(country) {
    return async function (dispatch) {
        return await axios.get(COUNTRIES_URL)
            .then((response) => {
                dispatch({
                    type: SEARCH_COUNTRIES,
                    payload: response.data.filter(e => e.name === country)
                })
            })
    }
}
