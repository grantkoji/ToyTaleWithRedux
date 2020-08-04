import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//these three lines are imported and new
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './Reducers/reducer.js'

let store=createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));