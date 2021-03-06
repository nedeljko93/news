

const INITIAL_STATE = { topNews: [], isUS: true }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "load_top_news":
            console.log(action.payload)
            return { ...state, topNews: action.payload }
        default:
            return state;
    }
}