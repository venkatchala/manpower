import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import peopleStore from "./store";
import PeopleListDetail from "./peopleList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewUserDetail from "./addNewUser";

ReactDOM.render(
  <Provider store={peopleStore}>
    <h1>People Management App</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddNewUserDetail />}></Route>
        <Route path="/peopleList" element={<PeopleListDetail />}></Route>
      </Routes>
    </BrowserRouter>
    <h1>Thank You</h1>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
