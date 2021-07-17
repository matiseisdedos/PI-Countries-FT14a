import axios from 'axios'
import { COUNTRIES_URL } from '../../constants'

export const GET_DETAIL = "GET_DETAIL"
export function getDetail(alpha3Code) {
    return function (dispatch) {
        return axios.get(COUNTRIES_URL + `/${alpha3Code}`)
            .then((response) => {
                dispatch({
                    type: GET_DETAIL,
                    payload: response.data
                })
            })
    }
}