import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './zedgo/d/app'
import reportWebVitals from './reportWebVitals';

//import SignUp from './zedgo/d/signup';
//import BoxSystemProps from './Views/SignIn';
//import ZedGo from './zedgo/Zedgo';
//import Dash from './Views/dashboard1'
import Layout from './Views/layout.js'
import DashBoard from './Views/list.js';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ZedGo/> */}
    {/* <SignUp/> */}
    {/* <App /> */}
  
    <Layout/>
    {/* < BoxSystemProps/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
