import { GET_COUNTRIES } from "../actions/countriesActions";
import { ADD_ACT } from "../actions/addAct";
import { GET_DETAIL } from "../actions/countryDetail";

const initialState = {
    countries: [],
    activity: [],
    country: {}
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
        case GET_DETAIL:
            return {
                ...state,
                country: action.payload
            }


        default:
            return {
                ...state
            }
    }
}

export default reducer;