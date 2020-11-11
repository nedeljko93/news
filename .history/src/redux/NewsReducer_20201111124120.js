import {
    LOAD_TOP_NEWS,
    LOAD_CATEGORIES,
    LOAD_TOP_NEWS_FIRST_TIME,
    LOAD_CATEGORIES_FIRST_TIME,
    LOAD_ONE_CATEGORY,
    LOAD_FIRST_TIME_ONE_CATEGORY
} from "./constants"

const INITIAL_STATE = {
    topNews: [],
    isUS: false,
    list: {
        sportList: [],
        scienceList: [],
        healthList: [],
        generalList: [],
        technologyList: [],
        entertainmentList: [],
        topNews: [],
    },
    categoryList: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOAD_TOP_NEWS_FIRST_TIME:
            return { ...state, topNews: action.payload }
        case LOAD_CATEGORIES_FIRST_TIME:
            console.log("LAOD CATE firsts time" + action.payload)
            return { ...state, list: action.payload }
        case LOAD_TOP_NEWS:
            return { ...state, topNews: action.payload, isUS: !state.isUS }
        case LOAD_CATEGORIES:
            console.log("LAOD CATE" + action.payload)
            return { ...state, list: action.payload, isUS: !state.isUS }
        case LOAD_ONE_CATEGORY:
            console.log("LOAD ONE ")
            return { ...state, categoryList: action.payload, isUS: !state.isUS }
        case LOAD_FIRST_TIME_ONE_CATEGORY:
            console.log("REDUCER FIRST TIME ")
            return { ...state, categoryList: action.payload, }
        default:
            return state;
    }
} 