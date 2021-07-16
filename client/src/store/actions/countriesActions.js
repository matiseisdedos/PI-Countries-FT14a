import axios from 'axios'
import { COUNTRIES_URL } from '../../constants'

export const GET_COUNTRIES = "GET_COUNTRIES"
export function getCountries() {
    return function (dispatch) {
        return axios.get(COUNTRIES_URL)
            .then((response) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: response.data
                })
            })
    }
}