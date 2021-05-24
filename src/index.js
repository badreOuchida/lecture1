import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import {combineReducers} from 'redux'
import propReducer from './stores/properties/reducers/reducers';
import blogsReducer from './stores/blogs/reducers/reducers';
import ItemReducer from './stores/propertie/reducers/reducers';
import blogReducer from './stores/blog/reducers/reducers';
import commentReducer from './stores/comment/reducers/reducers';



const reducers = combineReducers({
		prop:propReducer,
		blogs:blogsReducer,
		item:ItemReducer,
		blog:blogReducer,
		comment:commentReducer
		})

const store = configureStore({reducer:reducers});



const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);


export default store