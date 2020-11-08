
const INITIAL_STATE = { topNews: [], country: "us" }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case: "load_top_news":
            return { ...state, topNews: action.payload }

        default:
            return state;
    }
}