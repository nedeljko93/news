import { createStore } from 'redux';
import newsReducer from './NewsReducer'

export const Store = createStore(newsReducer)