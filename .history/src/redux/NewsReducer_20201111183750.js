import {
    LOAD_ONE_CATEGORY,
    LOAD_FIRST_TIME_ONE_CATEGORY,
    LOAD_DATA,
    LOAD_DATA_FIRST_TIME,
    FILTER_ARTICLES,
    LOADING_VALUES
} from "./constants"

const INITIAL_STATE = {
    value: '',
    isUS: false,
    loading: false,
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
            return { ...state, list: action.payload, loading: false }
        case LOAD_DATA:
            return { ...state, list: action.payload, isUS: !state.isUS, loading: !state.loading }
        case LOAD_ONE_CATEGORY:
            return { ...state, categoryList: action.payload, isUS: !state.isUS, loading: false }
        case LOAD_FIRST_TIME_ONE_CATEGORY:
            return { ...state, categoryList: action.payload, loading: false }
        case LOADING_VALUES:
            return { ...state, loading: true };
        default:
            return state;
    }
} 