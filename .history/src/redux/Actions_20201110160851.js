import {
    LOAD_TOP_NEWS,
    LOAD_CATEGORIES,
    LOAD_TOP_NEWS_FIRST_TIME,
    LOAD_CATEGORIES_FIRST_TIME,
    LOAD_FIRST_TIME_ONE_CATEGORY,
    LOAD_ONE_CATEGORY,
    TOP_HEADLINES_API
} from "./constants"
import newsApi from '../api/newsApi';


export const loadTopNews = (country, isFirstLoading) => {

    return function (dispatch) {
        newsApi.get(TOP_HEADLINES_API, {
            params: {
                country: country
            }
        })
            .then(response => {
                if (isFirstLoading) {
                    dispatch({
                        type: LOAD_TOP_NEWS_FIRST_TIME,
                        payload: response.data.articles
                    })
                }
                else {
                    console.log("ACTION TOP NEWS" + country)
                    dispatch({
                        type: LOAD_TOP_NEWS,
                        payload: response.data.articles
                    })
                }
            })

    }
}
export const loadOneCategory = (country, category, isFirstLoading) => {
    return function (dispatch) {
        newsApi.get(TOP_HEADLINES_API, {
            country: country,
            category: category
        }).then(response => {
            if (isFirstLoading) {
                dispatch({
                    type: LOAD_ONE_CATEGORY,
                    payload: response.data.articles
                })
            }
            else {
                dispatch({
                    type: LOAD_TOP_NEWS_FIRST_TIME,
                    payload: response.data.articles
                })
            }
        })

    }
}
export const loadCategories = (country, isFirstLoading) => {
    return function (dispatch) {
        var list = { sportList: [], scienceList: [], healthList: [], generalList: [], technologyList: [], entertainmentList: [] }
        for (var i = 0; i < 6; i++) {
            switch (i) {
                case 0:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: "entertainment"
                        }
                    })
                        .then(response => { list.entertainmentList = response.data.articles })
                    break;
                case 1:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: "general"
                        }
                    })
                        .then(response => { list.generalList = response.data.articles })
                    break;
                case 2:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: "health"
                        }
                    })
                        .then(response => { list.healthList = response.data.articles })
                    break;
                case 3:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: "science"
                        }
                    })
                        .then(response => { list.scienceList = response.data.articles })
                    break;
                case 4:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: "sports"
                        }
                    })
                        .then(response => { list.sportList = response.data.articles })
                    break;
                case 5:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: "technology"
                        }
                    })
                        .then(response => {
                            list.technologyList = response.data.articles;
                            if (isFirstLoading) {
                                dispatch({
                                    type: LOAD_CATEGORIES_FIRST_TIME,
                                    payload: list
                                })
                            }
                            else {
                                dispatch({
                                    type: LOAD_CATEGORIES,
                                    payload: list
                                })
                            }
                        })
                    break;
            }
        }

    }
}
const callCategoriesApi = (country, category) => {
    newsApi.get("top-headlines", {
        params: {
            country: country,
            category: category
        }
    })
        .then(response => { return response.data.articles })
}

