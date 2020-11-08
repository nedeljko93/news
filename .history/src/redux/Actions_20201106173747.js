import { COUNTRY_HAS_CHANGED } from "./constants"


import newsApi from '../api/newsApi';

export const countryHasChanged = (isUS) => {
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

}