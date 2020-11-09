import { act } from "react-test-renderer"
import { LOAD_TOP_NEWS, LOAD_CATEGORIES, LOAD_TOP_NEWS_FIRST_TIME, LOAD_CATEGORIES_FIRST_TIME } from "./constants"

const INITIAL_STATE = { topNews: [], isUS: false, list: { sportList: [], scienceList: [], healthList: [], generalList: [], technologyList: [], entertainmentList: [] } }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOAD_TOP_NEWS_FIRST_TIME:
            return { ...state, topNews: action.payload }
        case LOAD_CATEGORIES_FIRST_TIME:
            return { ...state, list: action.payload }
        case LOAD_TOP_NEWS:
            return { ...state, topNews: action.payload, isUS: !state.isUS }
        case LOAD_CATEGORIES:
            return { ...state, list: action.payload, isUS: !state.isUS }
        default:
            return state;
    }
} 