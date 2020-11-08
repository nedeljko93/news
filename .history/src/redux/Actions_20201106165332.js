import { COUNTRY_HAS_CHANGED } from "./constants"

// import { COUNTRY_HAS_CHANGED } from './constants'
import newsApi from '../api/newsApi';

// export const countryHasChanged = (country) => {
//     return {
//         type: COUNTRY_HAS_CHANGED,
//         payload: country
//     }
// }
export const loadTopNews = async (list) => {
    return {
        type: "load_top_news",
        payload: list
    }

}