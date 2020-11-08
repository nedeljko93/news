import { COUNTRY_HAS_CHANGED } from "./constants"

const INITIAL_STATE = { topNews: [], isUS: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "load_top_news":
            console.log(action.payload)
            return { ...state, topNews: action.payload }
        case COUNTRY_HAS_CHANGED:
            console.log(action.payload)
            return { ...state, isUs: action.payload }
        default:
            return state;
    }
}