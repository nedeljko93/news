import { COUNTRY_HAS_CHANGED } from "./constants"

import { COUNTRY_HAS_CHANGED } from './constants'

export const countryHasChanged = (text) => {
    return {
        type: COUNTRY_HAS_CHANGED,
        payload: text
    }
}