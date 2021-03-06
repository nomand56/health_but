import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./index.css"
import {Provider} from "react-redux"
import {createStore ,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import { reducer } from './reducer/index';

const Store=createStore(reducer,compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={Store}>
  
    <App />

</Provider>
);

