import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.module.scss'
import {
  HashRouter as Router, // use this to solve url problem in github
  Routes,
  Route,
} from "react-router-dom";
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/myFirstComponent';
import Navbar from './navbar/navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router> {/* change this from browser router to plain router */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/first' element={<MyFirstComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
