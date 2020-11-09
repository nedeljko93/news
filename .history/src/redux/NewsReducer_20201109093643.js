import { LOAD_TOP_NEWS, LOAD_CATEGORIES } from "./constants"

const INITIAL_STATE = { topNews: [], isUS: false, list: { sportList: [], scienceList: [], healthList: [], generalList: [], technologyList: [], entertainmentList: [] } }

export default (state = INITIAL_STATE, action) => {
    console.log("Switch")
    switch (action.type) {
        case LOAD_TOP_NEWS:
            return { ...state, topNews: action.payload.topNews, isUS: !state.isUS }
        case LOAD_CATEGORIES:
            return { ...state, list: action.payload, isUS: !state.isUS }
        default:
            return state;
    }
} 