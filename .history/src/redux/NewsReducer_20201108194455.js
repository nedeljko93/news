import { COUNTRY_HAS_CHANGED } from "./constants"

const INITIAL_STATE = { topNews: [], isUS: false, list: { sportList: [], scienceList: [], healthList: [], generalList: [], technologyList: [], entertainmentList: [] } }

export default (state = INITIAL_STATE, action) => {
    console.log("Switch")
    switch (action.type) {
        case "load_top_news":
            return { ...state, topNews: action.payload }
        case "country_has_changed":
            console.log("Reducer :" + action.payload)
            return { ...state, isUS: !isUS }
        case "LOAD_CAT":
            return { ...state, list: action.payload }
        default:
            return state;
    }
}