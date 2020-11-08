import { createStore } from 'redux';
import NewsReducer from './NewsReducer'

export const Store = createStore(NewsReducer)