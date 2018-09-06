import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Karma from './components/karma/karma';
import karmaReducer from './reducers/index';
import messageReducer from './reducers/index';
import * as karmaActions from './reducers/index';
import MessageCreator from './components/message/message';

const rootReducer= combineReducers( 
  karmaReducer,
  messageReducer
)

const store = createStore(karmaReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const render = () =>{
ReactDOM.render(
  <Provider store = {store}>
  <div>
  <MessageCreator
  
  />
  <Karma 
  value ={store.getState()}
  AddToTarget={()=>store.dispatch(karmaActions.AddToTarget)}
  DecrementToTarget={()=>store.dispatch(karmaActions.DecrementToTarget)}
  />
  </div>
  </Provider>
  
  , document.getElementById('root'));
};
store.subscribe(render);
render();
