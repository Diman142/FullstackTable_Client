import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxThunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
