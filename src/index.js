import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './phone.css';
import DashBoard from './Dashboard.js';
import App from './App.js';
import SignIn from "./SignIn.js"
import SignUp from "./SignUp.js"
import reportWebVitals from './reportWebVitals';
import Licence from "./License.js"
import Service from"./Service.js"
import Session from "./Session.js"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "App",
    element: <App />,
  },
  {
    path: "Service",
    element: <Service />,
  },
  {
    path: "Session",
    element: <Session />,
  },
  {
    path: "Licence",
    element: <Licence />,
  },
  {
    path: "SignIn",
    element: <SignIn />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
  {
    path: "DashBoard",
    element: <DashBoard />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <  RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
