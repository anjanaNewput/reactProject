import { createStore } from 'redux';
import reducers from './reducers/user-reducer.js';

export const store = createStore(reducers);