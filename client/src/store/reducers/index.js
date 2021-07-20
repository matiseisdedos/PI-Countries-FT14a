import { GET_COUNTRIES } from "../actions/countriesActions";
import { ADD_ACT } from "../actions/addAct";
import { GET_DETAIL } from "../actions/countryDetail";
import { SEARCH_COUNTRIES } from "../actions/search";

const initialState = {
    countries: [],
    activity: [],
    country: {},
    search: []
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
                country: action.payload[0]
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                search: action.payload
            }


        default:
            return {
                ...state
            }
    }
}

export default reducer;