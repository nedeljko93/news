import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import newsReducer from './NewsReducer'

export const Store = createStore(newsReducer, applyMiddleware(thunk))