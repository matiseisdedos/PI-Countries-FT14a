import axios from 'axios'
import { COUNTRIES_URL } from '../../constants'

export const GET_DETAIL = "GET_DETAIL"
export function getDetail(id) {
    return async function (dispatch) {
        return await axios.get(COUNTRIES_URL + `/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_DETAIL,
                    payload: response.data
                })
            })
    }
}