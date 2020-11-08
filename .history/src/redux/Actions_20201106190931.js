import { COUNTRY_HAS_CHANGED } from "./constants"


import newsApi from '../api/newsApi';

export const countryHasChanged = (isUS) => {
            params: {
                country: country
            }
        })
            .then(response => {
                dispatch({
                    type: 'load_top_news',
                    payload: response.data.articles
                })
            })

    }
}
export const loadCategories = (country) => {
    return function (dispatch) {
        var list = { sportList: [], scienceList: [], healthList: [], generalList: [], technologyList: [], entertainmentList: [] }
        for (var i = 0; i < 6; i++) {
            switch (i) {
                case 0:
                    newsApi.get("top-headlines", {
                        params: {
                            country: country,
                            category: "entertainment"
                        }
                    })
                        .then(response => { list.entertainmentList = response.data.articles })
                    break;
                case 1:
                    newsApi.get("top-headlines", {
                        params: {
                            country: country,
                            category: "general"
                        }
                    })
                        .then(response => { list.generalList = response.data.articles })
                    break;
                case 2:
                    newsApi.get("top-headlines", {
                        params: {
                            country: country,
                            category: "health"
                        }
                    })
                        .then(response => { list.healthList = response.data.articles })
                    break;
                case 3:
                    newsApi.get("top-headlines", {
                        params: {
                            country: country,
                            category: "science"
                        }
                    })
                        .then(response => { list.scienceList = response.data.articles })
                    break;
                case 4:
                    newsApi.get("top-headlines", {
                        params: {
                            country: country,
                            category: "sports"
                        }
                    })
                        .then(response => { list.sportList = response.data.articles })
                    break;
                case 5:
                    newsApi.get("top-headlines", {
                        params: {
                            country: country,
                            category: "technology"
                        }
                    })
                        .then(response => {
                            list.technologyList = response.data.articles
                            dispatch({
                                type: "LOAD_CAT",
                                payload: list
                            })
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

