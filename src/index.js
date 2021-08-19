// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory'
 
// 1. Initialize
const app = dva({
    history:createHistory()
});
 
// 2. Plugins
// app.use({});
 
// 3. Model
app.model(require('./models/app').default);
 
// 4. Router
app.router(require('./router').default);
 
// 5. Start
app.start('#root');

