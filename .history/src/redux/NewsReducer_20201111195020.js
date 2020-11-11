import {
    LOAD_ONE_CATEGORY,
    LOAD_FIRST_TIME_ONE_CATEGORY,
    LOAD_DATA,
    LOAD_DATA_FIRST_TIME,
    FILTER_ARTICLES,
    LOADING_VALUES
} from "./constants"

const INITIAL_STATE = {
    isUS: false,
    isLoading: false,
    value: '',
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
            return { ...state, list: action.payload, isLoading: false }
        case LOAD_DATA:
            return { ...state, list: action.payload, isUS: !state.isUS, isLoading: false }
        case LOAD_ONE_CATEGORY:
            return { ...state, categoryList: action.payload, isUS: !state.isUS, isLoading: false }
        case LOAD_FIRST_TIME_ONE_CATEGORY:
            return { ...state, categoryList: action.payload, isLoading: false }
        case LOADING_VALUES:
            return { ...state, isLoading: true };
        case FILTER_ARTICLES:
            // const  value  = action;
            const works = state.list.topNewsList.filter((val) => val.title.includes(value));
            return { ...state,  works };
        default:

            return state;
    }
} 