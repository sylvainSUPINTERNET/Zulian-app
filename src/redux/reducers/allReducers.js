import incrementReducer from './reducer.increment'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    incrementReducer,
});

export default allReducers
