import axios from 'axios'
// en realidad va el link a el post.activity
import { ADD_ACT_URL } from '../../constants'

export const ADD_ACT = "ADD_ACT"
export function addActivity() {
    return function (dispatch) {
        return axios.post(ADD_ACT_URL)
            .then((response) => {
                dispatch({
                    type: ADD_ACT,
                    payload: response.data
                })
            })
    }
}