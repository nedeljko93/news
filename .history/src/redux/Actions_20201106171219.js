import { COUNTRY_HAS_CHANGED } from "./constants"

// import { COUNTRY_HAS_CHANGED } from './constants'
import newsApi from '../api/newsApi';

// export const countryHasChanged = (country) => {
//     return {
//         type: COUNTRY_HAS_CHANGED,
//         payload: country
//     }
// }
export const loadTopNews = (list) => {
    return function (dispatch) {
        newsApi.get("?country=us")
            .then(response => {
                dispatch({
                    type: 'load_top_news',
                    payload: response.data.articles
                })
            })

    }

}