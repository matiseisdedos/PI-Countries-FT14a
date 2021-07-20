import axios from 'axios'
import { COUNTRIES_URL } from '../../constants'

export const GET_ORDER = "GET_ORDER"
export function getOrder(orden) {
    return async function (dispatch) {
        return await axios.get(`http://localhost:3001/countries/order/${orden}`)
            .then((response) => {
                dispatch({
                    type: GET_ORDER,
                    payload: response.data
                })
            })
    }
}