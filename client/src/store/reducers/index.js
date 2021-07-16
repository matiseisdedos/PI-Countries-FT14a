import { GET_COUNTRIES } from "../actions/countriesActions";
import { ADD_ACT } from "../actions/addAct";

const initialState = {
    countries: [],
    activity: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case ADD_ACT: {
            return {
                ...state,
                activity: action.payload
            }
        }


        default:
            return {
                ...state
            }
    }
}

export default reducer;