import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter  } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
