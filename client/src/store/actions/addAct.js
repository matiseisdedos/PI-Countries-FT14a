import axios from 'axios'
// en realidad va el link a el post.activity
import { ADD_ACT_URL } from '../../constants'

export const ADD_ACT = "ADD_ACT"
export function addActivity(state) {
    return async function (dispatch) {
        return await axios({
            method: 'post',
            url: ADD_ACT_URL,
            data: {
                name: state.name,
                level: state.level,
                length: parseInt(state.length),
                season: state.season,
                countries: state.countries
            }
        })
    }
}