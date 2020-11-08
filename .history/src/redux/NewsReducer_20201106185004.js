import { COUNTRY_HAS_CHANGED } from "./constants"

const INITIAL_STATE = { topNews: [], isUS: true, list: { sportList: [], scienceList: [], healthList: [], generalList: [], technologyList: [], entertainmentList: [] } }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "load_top_news":
            return { ...state, topNews: action.payload }
        case COUNTRY_HAS_CHANGED:
            return { ...state, isUs: action.payload }
        case "LOAD_CAT":
            console.log("ASD")
            return { ...state, list: action.payload }
        default:
            return state;
    }
}