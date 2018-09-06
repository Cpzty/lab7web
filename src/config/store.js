import {createStore,combineReducers} from 'redux';
import karmaReducer from '../reducers/reducer';
const rootReducer = combineReducers({
  karma:karmaReducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;