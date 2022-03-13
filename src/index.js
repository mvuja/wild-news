import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import ScrollToTop from './ScrollToTop';

import { BrowserRouter } from "react-router-dom";

// import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux';
// import userReducer from './features/Blog'

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        {/* <Provider store={store}> */}
          <App />
        {/* </Provider> */}
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
