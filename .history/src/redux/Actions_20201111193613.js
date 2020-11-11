import {
    LOAD_FIRST_TIME_ONE_CATEGORY,
    LOAD_ONE_CATEGORY,
    TOP_HEADLINES_API,
    CATEGORY_ENTERTAINMENT,
    CATEGORY_GENERAL,
    CATEGORY_HEALTH,
    CATEGORY_SCIENCE,
    CATEGORY_SPORTS,
    CATEGORY_TECHNOLOGY,
    LOAD_DATA,
    LOAD_DATA_FIRST_TIME,
    FILTER_ARTICLES,
    LOADING_VALUES
} from "./constants"
import newsApi from '../api/newsApi';


// export const loadTopNews = (country, isFirstLoading) => {

//     return function (dispatch) {
//         newsApi.get(TOP_HEADLINES_API, {
//             params: {
//                 country: country
//             }
//         })
//             .then(response => {
//                 if (isFirstLoading) {
//                     dispatch({
//                         type: LOAD_TOP_NEWS_FIRST_TIME,
//                         payload: response.data.articles
//                     })
//                 }
//                 else {
//                     console.log("ACTION TOP NEWS" + country)
//                     dispatch({
//                         type: LOAD_TOP_NEWS,
//                         payload: response.data.articles
//                     })
//                 }
//             })

//     }
// }

export const loadOneCategory = (country, category, isFirstLoading) => {
    return function (dispatch) {
        dispatch({
            type: LOADING_VALUES
        })
        newsApi.get(TOP_HEADLINES_API, {
            params: {
                country: country,
                category: category
            }
        }).then(response => {
            if (!isFirstLoading) {
                dispatch({
                    type: LOAD_ONE_CATEGORY,
                    payload: response.data.articles
                })
            }
            else {
                dispatch({
                    type: LOAD_FIRST_TIME_ONE_CATEGORY,
                    payload: response.data.articles
                })
            }
        })

    }
}
export const filterArticles = (searchValue) => {
    dispatch({
        type: FILTER_ARTICLES,
        payload: searchValue
    })
}
export const loadData = (country, isFirstLoading, category, isCategoryLoading) => {
    return function (dispatch) {
        dispatch({
            type: LOADING_VALUES
        })
        var list = {
            sportList: [],
            scienceList: [],
            healthList: [],
            generalList: [],
            technologyList: [],
            entertainmentList: [],
            topNewsList: [],
            categoryList: [],
            categoryList: []
        }
        for (var i = 0; i < 8; i++) {
            switch (i) {
                case 0:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country
                        }
                    }).then(response => { list.topNewsList = response.data.articles });
                    break;
                case 1:
                    if (isCategoryLoading) {
                        newsApi.get(TOP_HEADLINES_API, {
                            params: {
                                country: country,
                                category: category
                            }
                        }).then(response => list.categoryList = response.data.articles)
                    }
                    break;
                case 2:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: CATEGORY_ENTERTAINMENT
                        }
                    })
                        .then(response => { list.entertainmentList = response.data.articles.slice(0, 5) });
                    break;
                case 3:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: CATEGORY_GENERAL
                        }
                    })
                        .then(response => { list.generalList = response.data.articles.slice(0, 5) });
                    break;
                case 4:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: CATEGORY_HEALTH
                        }
                    })
                        .then(response => { list.healthList = response.data.articles.slice(0, 5) });
                    break;
                case 5:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: CATEGORY_SCIENCE
                        }
                    })
                        .then(response => { list.scienceList = response.data.articles.slice(0, 5) });
                    break;
                case 6:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: CATEGORY_SPORTS
                        }
                    })
                        .then(response => { list.sportList = response.data.articles.slice(0, 5) });
                    break;
                case 7:
                    newsApi.get(TOP_HEADLINES_API, {
                        params: {
                            country: country,
                            category: CATEGORY_TECHNOLOGY
                        }
                    })
                        .then(response => {
                            list.technologyList = response.data.articles.slice(0, 5);
                            if (isFirstLoading) {
                                dispatch({
                                    type: LOAD_DATA_FIRST_TIME,
                                    payload: list
                                })
                            }
                            else {
                                dispatch({
                                    type: LOAD_DATA,
                                    payload: list
                                })
                            }
                        })
                    break;
            }
        }

    }
}

