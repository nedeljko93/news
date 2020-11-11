import {
    LOAD_ONE_CATEGORY,
    LOAD_FIRST_TIME_ONE_CATEGORY,
    LOAD_DATA,
    LOAD_DATA_FIRST_TIME,
    FILTER_ARTICLES
} from "./constants"

const INITIAL_STATE = {
    isUS: false,
    list: {
        sportList: [],
        scienceList: [],
        healthList: [],
        generalList: [],
        technologyList: [],
        entertainmentList: [],
        topNewsList: [],
        categoryList: []
    },
    categoryList: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOAD_DATA_FIRST_TIME:
            return { ...state, list: action.payload }
        case LOAD_DATA:
            return { ...state, list: action.payload, isUS: !state.isUS }
        case LOAD_ONE_CATEGORY:
            return { ...state, categoryList: action.payload, isUS: !state.isUS }
        case LOAD_FIRST_TIME_ONE_CATEGORY:
            return { ...state, categoryList: action.payload, }
        case FILTER_ARTICLES:
            console.log("FILTER"+ s)
            return state;
        default:
            return state;
    }
} 