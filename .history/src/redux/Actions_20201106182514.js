import { COUNTRY_HAS_CHANGED } from "./constants"


import newsApi from '../api/newsApi';

export const countryHasChanged = (isUS) => {
    console.log(isUS)
    return {
        type: COUNTRY_HAS_CHANGED,
        payload: isUS
    }
}
export const loadTopNews = (country) => {
    return function (dispatch) {
        newsApi.get("top-headlines", {
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
    export const loadCategories = (country) => {
        var list = { sportList: [], scienceList: [], healthList: [], generalList: [], technologyList: [], entertainmentList: [] }
        for (var i = 0; i < 6; i++) {
            switch (i) {
                case 0:
                    newsApi.get("?country=us&category=entertainment")
                        .then(response => { list.entertainmentList = response.articles })
                    break;
                case 1:
                    newsApi.get("?country=us&category=general")
                        .then(response => { list.generalList = response.articles })
                    break;
                case 2:
                    newsApi.get("?country=us&category=health")
                        .then(response => { list.healthList = response.articles })
                    break;
                case 3:
                    newsApi.get("?country=us&category=science")
                        .then(response => { list.scienceList = response.articles })
                    break;
                case 4:
                    newsApi.get("?country=us&category=sport")
                        .then(response => { list.sportList = response.articles })
                    break;
                case 6:
                    newsApi.get("?country=us&category=technology")
                        .then(response => { list.technologyList = response.articles })
                    break;
            }
        }
    }


}